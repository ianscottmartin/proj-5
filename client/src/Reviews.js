import React, { useState, useEffect } from 'react';
import withNavbar from './Layout';
import ReviewForm from './ReviewForm';
import MuseumReviewForm from './MuseumReview'; // Import MuseumReviewForm
import ArtistReviews from './ArtistReviews'; // Import ArtistReviews
import { Formik } from 'formik';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const museum_id = 1; // Replace '1' with the actual museum_id you want to retrieve

  useEffect(() => {
    // Fetch reviews and update the reviews state
    fetch(`/api/reviews/museums/${museum_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [museum_id]); // Include museumId as a dependency

  const handleReviewSubmit = (reviewData) => {
    const artist_id = 2; // Replace '2' with the actual artist_id you want to submit a review for

    fetch(`/api/reviews/artists/${artist_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle success, e.g., fetch updated reviews from the API
        // and update the state to show the latest reviews
        // You can also provide user feedback here if needed
      })
      .catch((error) => {
        console.error('Error submitting review:', error);
        // Handle the error and provide user feedback if needed
      });
  };

  return (
    <div>
      <h2>Reviews</h2>
      {error ? (
        <p>Error fetching reviews: {error.message}</p>
      ) : (
        <div>
          {reviews.length > 0 ? ( // Check if there are reviews
            reviews.map((review) => (
              <div key={review.id}>
                <p>{review.text}</p>
                {/* Render other review details as needed */}
              </div>
            ))
          ) : (
            <p>No reviews available for this museum/artist.</p>
          )}
          <ReviewForm onSubmit={handleReviewSubmit} />
          {/* Add MuseumReviewForm and ArtistReviews here */}
          <MuseumReviewForm />
          <ArtistReviews />
        </div>
      )}
    </div>
  );
}

export default withNavbar(Reviews);
