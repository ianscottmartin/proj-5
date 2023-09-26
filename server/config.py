# config.py
from flask import Flask
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy

app= Flask(__name__)
app.secret_key = b'\x14\xa6\xc8\xa3\\\x87\x9d8k\xf0\x19A$q\xdf\x97'
app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

db = SQLAlchemy()

migrate = Migrate(app, db)
db.init_app(app)

bcrypt =Bcrypt(app)

api = Api(app)



