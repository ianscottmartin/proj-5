from flask import request, jsonify
from flask_restful import Resource
from config import app, db, api
from models import User, Review, Artist, Museum

# All routes here!
@app.route("/", methods=["GET"])
def root():
    return "<h1>Hello from root Baby yeah!</h1>"
# RESTful route syntax

class Users(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()] 
        return users, 200

api.add_resource(Users, '/api/users')

# Create an API endpoint to retrieve reviews
@app.route('/api/reviews', methods=['GET'])
def get_reviews():
    reviews = Review.query.all()
    return jsonify([review.to_dict() for review in reviews]), 200

# Create a new review for a museum
@app.route('/api/reviews/museums/<int:museum_id>', methods=['GET','POST'])
def create_museum_review(museum_id):
    data = request.json
    new_review = Review(
        user_id=data['user_id'],
        museum_id=museum_id,
        text=data['text'],
        rating=data['rating']
    )
    db.session.add(new_review)
    db.session.commit()
    return jsonify({'message': 'Museum review created successfully'}), 201

# Retrieve reviews for a museum
@app.route('/api/reviews/museums/<int:museum_id>', methods=['GET'])
def get_museum_reviews(museum_id):
        # Log the incoming request
    app.logger.info(f'Received GET request for museum_id {museum_id}')
    
    # Here, you can add code to fetch reviews for a specific museum (museum_id)
    # Example: Query the database to get reviews for the specified museum
    reviews = Review.query.filter_by(museum_id=museum_id).all()
    return jsonify([review.to_dict() for review in reviews]), 200

# Create a new review for an artist
@app.route('/api/reviews/artists/<int:artist_id>', methods=['GET', 'POST'])
def create_artist_review(artist_id):
   

    data = request.json
 
    new_review = Review(
        user_id=data['user_id'],
        artist_id=artist_id,
        text=data['text'],
        rating=data['rating']
    )
    db.session.add(new_review)
    db.session.commit()
    return jsonify({'message': 'Artist review created successfully'}), 201



# Retrieve reviews for an artist
@app.route('/api/reviews/artists/<int:artist_id>', methods=['GET'])
def get_artist_reviews(artist_id):
#     # Here, you can add code to fetch reviews for a specific artist (artist_id)
#     # Example: Query the database to get reviews for the specified artist
    reviews = Review.query.filter_by(artist_id=artist_id).all()
    return jsonify([review.to_dict() for review in reviews]), 200



if __name__ == '__main__':
    app.run(port=4000, debug=True)
