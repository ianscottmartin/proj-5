from faker import Faker
from models import User, Artist, Museum, City, Review
from config import db, app, bcrypt

faker = Faker()

with app.app_context():
    # Clear existing data
    User.query.delete()
    Artist.query.delete()
    Museum.query.delete()
    City.query.delete()
    Review.query.delete()  # Clear existing reviews

    for _ in range(20):
        username = faker.profile(fields=["username"])["username"]
        user = User(username=username)

        user.password_hash = (
            username  # We are calling the password_hash setter method here
        )
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

    # Add reviews using Faker
    def add_reviews(num_reviews=50):
        for _ in range(num_reviews):
            user_id = faker.random_int(
                min=1, max=20
            )  # Replace with the actual range of user IDs
            artist_id = faker.random_int(
                min=1, max=5
            )  # Replace with the actual range of artist IDs
            museum_id = faker.random_int(
                min=1, max=6
            )  # Replace with the actual range of museum IDs
            text = faker.paragraph(nb_sentences=3)
            rating = faker.random_int(min=1, max=5)

            review = Review(
                user_id=user_id,
                artist_id=artist_id,
                museum_id=museum_id,
                text=text,
                rating=rating,
            )

            db.session.add(review)

    add_reviews()  # Add reviews to the database

    db.session.commit()

print("Database has been seeded.")


# from faker import Faker
# from models import User, Artist, Museum, City
# from config import db, app, bcrypt

# faker = Faker()

# with app.app_context():
#     # Clear existing data
#     User.query.delete()
#     Artist.query.delete()
#     Museum.query.delete()
#     City.query.delete()

#     for _ in range(20):
#         username = faker.profile(fields=["username"])["username"]
#         user = User(
#             username=username
#         )

#         user.password_hash = username # We are calling the password_hash setter method here
#         db.session.add(user)
#         db.session.commit()

#     artists = [
#          "Vincent van Gogh",
#          "Leonardo da Vinci",
#          "Pablo Picasso",
#          "Claude Monet",
#          "Michelangelo",
#     ]

#     for artist_name in artists:
#         artist = Artist(name=artist_name)
#         db.session.add(artist)

#     museum_and_cities = [
#         {"name": "Louvre", "city": "Paris"},
#         {"name": "Metropolitan Museum of Art", "city": "New York"},
#         {"name": "National Gallery", "city": "London"},
#         {"name": "Uffizi", "city": "Florence"},
#         {"name": "Rijksmuseum", "city": "Amsterdam"},
#         {"name": "Musee D'Orsay", "city": "Paris"},
#     ]
#     for item in museum_and_cities:
#         museum = Museum(name=item["name"], city=item["city"])
#         db.session.add(museum)

#         city = City(name=item["name"])
#         db.session.add(city)

#     db.session.commit()
