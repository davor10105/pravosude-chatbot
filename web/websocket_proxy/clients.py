import socketio
import datetime

sio_web = socketio.Client()
sio_rasa = socketio.Client()


@sio_web.event
def connect():
    print("sio web connection established")
    print("sio_web client sid " + sio_web.get_sid())


@sio_rasa.event
def connect():
    print("sio rasa connection established")
    print("sio_rasa client sid " + sio_rasa.get_sid())


@sio_web.on("user_uttered")
def web_message(data):
    print("sio web user ", data)
    sio_rasa.emit("user_uttered", data)


@sio_rasa.on("bot_uttered")
def rasa_message(data):
    print("rasa data bot ", data)
    sio_web.emit("bot_uttered", data)


@sio_web.event
def disconnect():
    print("disconnected from server")


@sio_rasa.event
def disconnect():
    print("sio rasa disconnected from server")


sio_web.connect("http://0.0.0.0:8569/socket.io")
# sio_web.wait()

sio_rasa.connect("http://0.0.0.0:8500/socket.io")
# sio_rasa.wait()
