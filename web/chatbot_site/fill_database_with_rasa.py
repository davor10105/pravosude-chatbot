import sqlite3 as sql
import uuid


class Example:
    def __init__(self, questions, answer, intent=None) -> None:
        self.questions = questions
        self.answer = answer
        if intent is None:
            self.intent = str(uuid.uuid4())
        else:
            self.intent = intent


if __name__ == "__main__":
    examples_path = "../../rasa_backend/chatbot_epredmet_examples_20072023.txt"

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

    database = "db.sqlite3"
    connection = sql.connect(database)
    cur = connection.cursor()

    for table_name in ["epredmet_intent", "epredmet_answer", "epredmet_question"]:
        truncate_query = f"delete from {table_name}"
        cur.execute(truncate_query)
        truncate_query = f"delete from SQLITE_SEQUENCE where name='{table_name}'"
        cur.execute(truncate_query)
    for example in examples:
        insert_query = f'insert into epredmet_intent VALUES(null, "{example.intent}")'
        cur.execute(insert_query)
        intent_id = cur.lastrowid
        cur.execute(
            f"insert into epredmet_answer VALUES(null, '{example.answer}', {intent_id})"
        )
        for question in example.questions:
            cur.execute(
                f"insert into epredmet_question VALUES(null, '{question}', {intent_id})"
            )
        print(intent_id)
    connection.commit()
    connection.close()
