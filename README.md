![image](https://github.com/davor10105/pravosude-chatbot/assets/37876742/883c90a5-1f4d-42ec-b4f0-26a3bf402371)

# Ministarstvo pravosuđa i uprave chatbot - Installation Instructions
### Starting the services:
- Rasa backend (chatbot backend):
  - `cd rasa_backend`
  - Create a new python environment (if not already present)
  - `pip install -r requirements.txt`
  - `source start_rasa.sh`
- django website:
  - `cd web`
  - Create a new python environment (if not already present)
  - `pip install -r requirements.txt`
  - `source start_django.sh`
- proxy websockets (communication between rasa and django):
  - `cd web/websocket_proxy`
  - Create a new python environment (if not already present)
  - `pip install -r requirements.txt`
  - Inside `web` directory: `source start_proxy_server.sh` and `source start_proxy_client.sh`
### Adding new questions and answers to the chatbot (TODO: Automate with a single button):
- Stop Rasa service (if running)
- Add new questions/answers to `chatbot_epredmet_examples_20072023.txt`
- Run `python3 generate_intents.py` (rasa python environment)
- Run `rasa train` (in `rasa_backend` directory)
- Restart Rasa service
