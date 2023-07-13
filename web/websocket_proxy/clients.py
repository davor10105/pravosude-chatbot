import socketio
import datetime

sio_web = socketio.Client()
sio_rasa = socketio.Client()


@sio_web.event
def connect():
    print('sio web connection established')


@sio_rasa.event
def connect():
    print('sio rasa connection established')


@sio_web.on('user_uttered')
def web_message(data):
    print('sio web user ', data)
    sio_rasa.emit('user_uttered', data)


@sio_rasa.on('bot_uttered')
def rasa_message(data):
    print('rasa data bot ', data)
    sio_web.emit('bot_uttered', data)


@sio_web.event
def disconnect():
    print('disconnected from server')


@sio_rasa.event
def disconnect():
    print('sio rasa disconnected from server')


sio_web.connect('http://localhost:8569/socket.io')
# sio_web.wait()

sio_rasa.connect('http://localhost:8500/socket.io')
# sio_rasa.wait()
