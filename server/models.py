from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True)
    _password_hash = db.Column(db.String)

    @hybrid_property
    def password_hash(self):
        return self._password_hash  # Fix the getter to return the password hash

    @password_hash.setter
    def password_hash(self, password):
        bcrypt_hash = bcrypt.generate_password_hash(password).decode("utf-8")
        self._password_hash = bcrypt_hash

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password)

    def __repr__(self):
        return f"User {self.username}, ID: {self.id}"

class Artist(db.Model):
    __tablename__ = "artists"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)

    def __init__(self, name):
        self.name = name

class Museum(db.Model):
    __tablename__ = "museums"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    city = db.Column(db.String)

    def __init__(self, name, city):
        self.name = name
        self.city = city

class City(db.Model):
    __tablename__ = "cities"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)

    def __init__(self, name):
        self.name = name

class Review(db.Model, SerializerMixin):  # Make sure to add SerializerMixin
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Correct foreign key references
    museum_id = db.Column(db.Integer, db.ForeignKey('museums.id'))
    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'))
    text = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'museum_id': self.museum_id,
            'artist_id': self.artist_id,
            'text': self.text,
            'rating': self.rating
        }
