import eventlet
import socketio
import sqlite3 as sql
import threading

database = "chatbot_site/db.sqlite3"
connection = sql.connect(database)

# Create cursor to execute SQL queries against the database
cur = connection.cursor()

sio = socketio.Server(cors_allowed_origins="*")
app = socketio.WSGIApp(sio)

last_question = {}
rasa_clients = {}
web_clients = {}
web_to_rasa_map = {}


@sio.on("connect", namespace="test")
def test_connect():
    print("connected kita")


@sio.event
def connect(sid, environ):
    # if sid in rasa_clients or sid in web_to_rasa_map:
    #    return

    print("connect ", sid)
    sio.emit(
        "bot_uttered",
        {
            "text": "Podrav, ja sam chatbot sustava ePredmet. Postavite pitanje vezano uz sustav."
        },
        to=sid,
    )

    # create_rasa_client(sid=sid)
    # threading.Thread(target=create_web_client, args=(sid,)).start()
    # create_web_client(sid=sid)


def create_rasa_client(sid):
    sio_rasa = socketio.Client()
    sio_rasa.connect("http://0.0.0.0:8500/socket.io")
    sio_rasa.emit("session_request", {"session_id": [sid]})

    @sio_rasa.on("bot_uttered")
    def rasa_message(data):
        # data["sender_id"] = sid
        print(f"rasa data bot {data}")
        print(f"sending to {sid}")
        # sio.emit("bot_uttered", data, to=sid)

    rasa_clients[sid] = sio_rasa
    print(f"Number of Rasa Clients: {len(rasa_clients)}")


def create_web_client(sid):
    sio_web = socketio.Client()
    sio_web.connect("http://0.0.0.0:8569/socket.io")
    print(f"Created web client for {sid} {sio_web.get_sid()}")

    web_clients[sid] = sio_web
    web_to_rasa_map[sio_web.get_sid()] = sid
    print(f"Number of Web Clients: {len(web_clients)}")


@sio.on("user_uttered")
def my_message(sid, data):
    global last_question
    print("user server message ", sid, data)
    data["sender_id"] = sid
    data["session_id"] = sid

    if "👎" in data["message"]:
        print("dobio quick reply", last_question[sid])
        if sid in last_question:
            if last_question[sid] != "":
                print("last question", last_question[sid])
                insert_query = f'insert into epredmet_unansweredquestion VALUES(null, "{last_question[sid]}", null)'
                cur.execute(insert_query)
                connection.commit()
                last_question[sid] = ""
    else:
        last_question[sid] = data["message"]
        sio.emit("user_uttered", data)
        # print(f"emit data {rasa_clients[sid]}")
        # print(data)
        # rasa_clients[sid].emit("user_uttered", data)


@sio.on("bot_uttered")
def my_message(sid, data):
    print("bot server message ", sid, data)
    # data['quick_replies'] = [{'content_type': 'text', 'title': '👍', 'payload': '👍'},
    #                         {'content_type': 'text', 'title': '👎', 'payload': '👎'}]
    data["quick_replies"] = [{"content_type": "text", "title": "👎", "payload": "👎"}]
    sio.emit("bot_uttered", data, to=data["sender_id"])


@sio.event
def disconnect(sid):
    print("disconnect ", sid)
    if sid in rasa_clients:
        rasa_clients[sid].close()
        del rasa_clients[sid]
    sio.emit("web_disconnect", {"sender_id": sid})
    # print(f"Number of Rasa Clients: {len(rasa_clients)}")


if __name__ == "__main__":
    eventlet.wsgi.server(eventlet.listen(("0.0.0.0", 8569)), app)
