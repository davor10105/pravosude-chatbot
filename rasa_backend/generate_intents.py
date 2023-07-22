import uuid
from collections import OrderedDict
import yaml
from yaml.resolver import BaseResolver


class Example:
    def __init__(self, questions, answer, intent=None) -> None:
        self.questions = questions
        self.answer = answer
        if intent is None:
            self.intent = str(uuid.uuid4())
        else:
            self.intent = intent


class AsLiteral(str):
    pass


def represent_literal(dumper, data):
    return dumper.represent_scalar(BaseResolver.DEFAULT_SCALAR_TAG, data, style="|")


if __name__ == "__main__":
    examples_path = "chatbot_epredmet_examples_20072023.txt"

    examples = []
    with open(examples_path, "r") as f:
        c_intent, c_intro, c_questions, c_answer = None, None, [], None
        for i, line in enumerate(f.readlines()):
            line = line.strip()
            if line.startswith("!!"):
                c_intro = f"{line[2:]} - "
            elif line.startswith("INTENT"):
                if c_intent is not None:
                    example = Example(
                        questions=c_questions, answer=c_answer, intent=c_intent
                    )
                    examples.append(example)
                c_intent = line[7:]
                c_questions = []
            elif line.startswith("ANSWER"):
                c_answer = line[7:]
            else:
                c_questions.append(line)
        example = Example(questions=c_questions, answer=c_answer, intent=c_intent)
        examples.append(example)

    domain_dict = {}
    domain_dict["version"] = "3.1"
    domain_dict["intents"] = []
    domain_dict["responses"] = {}
    for example in examples:
        domain_dict["intents"].append(example.intent)
        domain_dict["responses"][f"utter_{example.intent}"] = [
            {"text": f'"{example.answer}"'}
        ]

    with open("domain.yml", "w") as f:
        yaml.dump(domain_dict, f, allow_unicode=True, width=float("inf"))

    yaml.add_representer(AsLiteral, represent_literal)

    nlu_dict = {}
    nlu_dict["version"] = "3.1"
    nlu_dict["nlu"] = []
    for example in examples:
        nlu_example = {}
        nlu_example["intent"] = example.intent
        example_str = example.questions
        example_str = AsLiteral(
            yaml.dump(example_str, allow_unicode=True, width=float("inf"))
        )
        nlu_example["examples"] = example_str
        nlu_dict["nlu"].append(nlu_example)

    with open("data/nlu.yml", "w") as f:
        yaml.dump(nlu_dict, f, allow_unicode=True, width=float("inf"))

    stories_dict = {}
    stories_dict["version"] = "3.1"
    stories_dict["stories"] = []
    for i, example in enumerate(examples):
        story = {"story": str(i)}
        story["steps"] = [
            {"intent": example.intent},
            {"action": f"utter_{example.intent}"},
        ]
        stories_dict["stories"].append(story)

    with open("data/stories.yml", "w") as f:
        yaml.dump(stories_dict, f, allow_unicode=True, width=float("inf"))

    rules_dict = {}
    rules_dict["version"] = "3.1"
    rules_dict["rules"] = []
    for i, example in enumerate(examples):
        rule = {"rule": str(i)}
        rule["steps"] = [
            {"intent": example.intent},
            {"action": f"utter_{example.intent}"},
        ]
        rules_dict["rules"].append(rule)

    with open("data/rules.yml", "w") as f:
        yaml.dump(rules_dict, f, allow_unicode=True, width=float("inf"))
