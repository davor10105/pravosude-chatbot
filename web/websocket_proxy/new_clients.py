import socketio
import datetime


sid_to_rasa_client = {}
sio_web = socketio.Client()


def create_rasa_client(sid):
    sio_rasa = socketio.Client()
    sio_rasa.connect("http://0.0.0.0:8500/socket.io")
    sio_rasa.emit("session_request", {"session_id": [sid]})

    @sio_rasa.on("bot_uttered")
    def rasa_message(data):
        data["sender_id"] = sid
        print(f"rasa data bot {data}")
        print(f"sending to {sid}")
        sio_web.emit("bot_uttered", data)

    sid_to_rasa_client[sid] = sio_rasa
    print(f"Number of Rasa Clients: {len(sid_to_rasa_client)}")


@sio_web.event
def connect():
    print("sio web connection established")
    print("sio_web client sid " + sio_web.get_sid())


@sio_web.on("user_uttered")
def web_message(data):
    global sid_to_rasa_client

    if data["sender_id"] not in sid_to_rasa_client:
        create_rasa_client(data["sender_id"])
    print("sio web user ", data)
    sid_to_rasa_client[data["sender_id"]].emit("user_uttered", data)


@sio_web.on("web_disconnect")
def web_disconnect(data):
    global sid_to_rasa_client

    if data["sender_id"] in sid_to_rasa_client:
        del sid_to_rasa_client[data["sender_id"]]
        print(f"Number of Rasa Clients {len(sid_to_rasa_client)}")


@sio_web.event
def disconnect():
    print("disconnected from server")


sio_web.connect("http://0.0.0.0:8569/socket.io")
# sio_web.wait()
