import socketio

sio_web = socketio.Client()
sio_web.connect("http://0.0.0.0:8569/socket.io")
print(f"Created web client")
