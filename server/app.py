from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from config import app, db
from models import User, Review, Artist, Museum

app = Flask(__name__)
api = Api(app)


# Resource for handling museum reviews
class MuseumReviewResource(Resource):
    def post(self, museum_id):
        data = request.json
        new_review = Review(
            user_id=data["user_id"],
            museum_id=museum_id,
            text=data["text"],
            rating=data["rating"],
        )
        db.session.add(new_review)
        db.session.commit()
        return jsonify({"message": "Museum review created successfully"}), 201

    def get(self, museum_id):
        reviews = Review.query.filter_by(museum_id=museum_id).all()
        if not reviews:
            return jsonify({"message": "No reviews found for this museum"}), 404
        return jsonify([review.to_dict() for review in reviews]), 200


api.add_resource(MuseumReviewResource, "/api/reviews/museums/<int:museum_id>")


# Resource for handling artist reviews
class ArtistReviewResource(Resource):
    def post(self, artist_id):
        data = request.json
        new_review = Review(
            user_id=data["user_id"],
            artist_id=artist_id,
            text=data["text"],
            rating=data["rating"],
        )
        db.session.add(new_review)
        db.session.commit()
        return jsonify({"message": "Artist review created successfully"}), 201

    def get(self, artist_id):
        reviews = Review.query.filter_by(artist_id=artist_id).all()
        if not reviews:
            return jsonify({"message": "No reviews found for this artist"}), 404
        return jsonify([review.to_dict() for review in reviews]), 200


api.add_resource(ArtistReviewResource, "/api/reviews/artists/<int:artist_id>")


# Resource for handling artists
class ArtistResource(Resource):
    def get(self):
        artists = Artist.query.all()
        return jsonify([artist.to_dict() for artist in artists]), 200


api.add_resource(ArtistResource, "/api/artists")


# Resource for handling users
class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return users, 200


api.add_resource(Users, "/api/users")


# Route for fetching all reviews
@app.route("/api/reviews", methods=["GET"])
def get_reviews():
    reviews = Review.query.all()
    return jsonify([review.to_dict() for review in reviews]), 200


if __name__ == "__main__":
    app.run(port=5000, debug=True)
