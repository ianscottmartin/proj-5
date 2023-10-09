import { useEffect, useState } from 'react';

function ArtistReviews({ artistId }) {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if artistId is valid before making the API request
    if (artistId) {
      fetch(`/api/reviews/artists/${artistId}`)
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
    } else {
      // Handle the case where artistId is missing or invalid
      setError(new Error('Invalid artist ID'));
    }
  }, [artistId]);

  // Render reviews and handle errors here
  return (
    <div>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              {review.text} - Rating: {review.rating}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ArtistReviews;

