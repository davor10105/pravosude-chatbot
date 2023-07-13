import eventlet
import socketio
import sqlite3 as sql

database = 'chatbot_site/db.sqlite3'
connection = sql.connect(database)

# Create cursor to execute SQL queries against the database
cur = connection.cursor()

sio = socketio.Server(cors_allowed_origins='*')
app = socketio.WSGIApp(sio)

last_question = {}


@sio.event
def connect(sid, environ):
    print('connect ', sid)


@sio.on('user_uttered')
def my_message(sid, data):
    global last_question
    print(sid)
    print('user server message ', data)
    if '👎' in data['message']:
        print('dobio quick reply', last_question[sid])
        if sid in last_question:
            if last_question[sid] != '':
                print('last question', last_question[sid])
                insert_query = f'insert into epredmet_unansweredquestion VALUES(null, "{last_question[sid]}", null)'
                cur.execute(insert_query)
                connection.commit()
                last_question[sid] = ''

    else:
        last_question[sid] = data['message']
        sio.emit('user_uttered', data)


@sio.on('bot_uttered')
def my_message(sid, data):
    print('bot server message ', data)
    data['quick_replies'] = [{'content_type': 'text', 'title': '👍', 'payload': '👍'},
                             {'content_type': 'text', 'title': '👎', 'payload': '👎'}]
    sio.emit('bot_uttered', data)


@sio.event
def disconnect(sid):
    print('disconnect ', sid)


if __name__ == '__main__':
    eventlet.wsgi.server(eventlet.listen(('localhost', 8569)), app)
