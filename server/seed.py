from faker import Faker
from models import User, Artist, Museum, City
from config import db, app, bcrypt

faker = Faker()

with app.app_context():
    # Clear existing data
    User.query.delete()
    Artist.query.delete()
    Museum.query.delete()
    City.query.delete()

    for _ in range(20):
        username = faker.profile(fields=["username"])["username"]
        user = User(
            username=username
        )
        
        user.password_hash = username # We are calling the password_hash setter method here
        db.session.add(user)
        db.session.commit()

    artists = [
         "Vincent van Gogh",
         "Leonardo da Vinci",
         "Pablo Picasso",
         "Claude Monet",
         "Michelangelo",
    ]

    for artist_name in artists:
        artist = Artist(name=artist_name)
        db.session.add(artist)

    museum_and_cities = [
        {"name": "Louvre", "city": "Paris"},
        {"name": "Metropolitan Museum of Art", "city": "New York"},
        {"name": "National Gallery", "city": "London"},
        {"name": "Uffizi", "city": "Florence"},
        {"name": "Rijksmuseum", "city": "Amsterdam"},
        {"name": "Musee D'Orsay", "city": "Paris"},
    ]
    for item in museum_and_cities:
        museum = Museum(name=item["name"], city=item["city"])
        db.session.add(museum)

        city = City(name=item["name"])
        db.session.add(city)

    db.session.commit()
