from typing import Optional, Dict, Text, Any, List
import os
import pickle
import logging
import torch
import torch.nn.functional as F

import rasa.shared.utils.io as rio

from rasa.engine.graph import GraphComponent, ExecutionContext
from rasa.engine.recipes.default_recipe import DefaultV1Recipe
from rasa.engine.storage.resource import Resource
from rasa.engine.storage.storage import ModelStorage
from rasa.shared.nlu.training_data.message import Message
from rasa.shared.nlu.training_data.training_data import TrainingData

from rasa.nlu.classifiers.classifier import IntentClassifier
from rasa.shared.nlu.constants import (
    INTENT,
    TEXT,
    INTENT_NAME_KEY,
    PREDICTED_CONFIDENCE_KEY,
)

from transformers import pipeline

logger = logging.getLogger(__name__)

# TODO: Correctly register your component with its type
@DefaultV1Recipe.register(
    [DefaultV1Recipe.ComponentType.INTENT_CLASSIFIER], is_trainable=True
)
class CustomNLUComponent(GraphComponent, IntentClassifier):
    def __init__(
        self,
        config: Dict[Text, Any],
        model_storage: ModelStorage,
        resource: Resource,
        execution_context: ExecutionContext,
        intent_vectors: Optional[Any] = None,
        intent_labels: Optional[List] = None,
    ) -> None:
        """Creates classifier."""
        self.component_config = config
        self._model_storage = model_storage
        self._resource = resource
        self._execution_context = execution_context

        self.intent_vectors = intent_vectors
        self.intent_labels = intent_labels
        self.extractor = pipeline(model='sentence-transformers/paraphrase-multilingual-mpnet-base-v2', task="feature-extraction")

    @classmethod
    def create(
        cls,
        config: Dict[Text, Any],
        model_storage: ModelStorage,
        resource: Resource,
        execution_context: ExecutionContext,
    ) -> GraphComponent:
        return cls(config, model_storage, resource, execution_context)

    def train(self, training_data: TrainingData) -> Resource:
        self.intent_vectors, self.intent_labels = [], []
        for ex in training_data.intent_examples:
            rio.raise_warning(f'{ex.get(TEXT)} {ex.get(INTENT)}')
            emb = self.extractor([ex.get(TEXT)], return_tensors=True)[0][:, 0]
            self.intent_vectors.append(emb)
            self.intent_labels.append(ex.get(INTENT))
        self.persist()
        return self._resource

    def persist(self) -> None:
        """Persist this model into the passed directory."""
        with self._model_storage.write_to(self._resource) as model_dir:
            with open(os.path.join(model_dir, 'intent_vectors.pickle'), 'wb') as f:
                pickle.dump(self.intent_vectors, f)
            with open(os.path.join(model_dir, 'intent_labels.pickle'), 'wb') as f:
                pickle.dump(self.intent_labels, f)

    @classmethod
    def load(
        cls,
        config: Dict[Text, Any],
        model_storage: ModelStorage,
        resource: Resource,
        execution_context: ExecutionContext,
        **kwargs: Any,
    ):
        """Loads trained component (see parent class for full docstring)."""
        try:
            with model_storage.read_from(resource) as model_dir:
                with open(os.path.join(model_dir, 'intent_vectors.pickle'), 'rb') as f:
                    intent_vectors = pickle.load(f)
                with open(os.path.join(model_dir, 'intent_labels.pickle'), 'rb') as f:
                    intent_labels = pickle.load(f)

        except ValueError:
            logger.warning(
                f"Failed to load {cls.__class__.__name__} from model storage. Resource "
                f"'{resource.name}' doesn't exist."
            )
            intent_keyword_map = None

        return cls(
            config, model_storage, resource, execution_context, intent_vectors, intent_labels
        )

    def process_training_data(self, training_data: TrainingData) -> TrainingData:
        # TODO: Implement this if your component augments the training data with
        #       tokens or message features which are used by other components
        #       during training.
        ...

        return training_data

    def process(self, messages: List[Message]) -> List[Message]:
        # TODO: This is the method which Rasa Open Source will call during inference.
        key_embs = torch.cat(self.intent_vectors)
        rio.raise_warning(f'{key_embs.shape}')
        for message in messages:
            emb = self.extractor([message.get(TEXT)], return_tensors=True)[0][:, 0]
            #rio.raise_warning(f"KeywordClassifier matched keyword '{emb.shape}' {type(emb)} to")
            scores = F.normalize(emb) @ F.normalize(key_embs).T
            scores = scores[0]
            max_score, max_index = torch.max(scores, -1)
            max_score = max_score.item()
            intent_name = self.intent_labels[max_index]
            intent = {
                INTENT_NAME_KEY: intent_name,
                PREDICTED_CONFIDENCE_KEY: max_score,
            }
            #intent_name = self._map_keyword_to_intent(message.get(TEXT))

            #confidence = 0.0 if intent_name is None else 1.0
            #intent = {
            #    INTENT_NAME_KEY: intent_name,
            #    PREDICTED_CONFIDENCE_KEY: confidence,
            #}

            if message.get(INTENT) is None or intent_name is not None:
                message.set(INTENT, intent, add_to_output=True)
            rio.raise_warning(f"Matched to '{intent_name}' {max_score}")

        return messages
