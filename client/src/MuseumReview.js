import { useEffect, useState } from 'react';

function MuseumReview({ museumId }) {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if museumId is valid before making the API request
    if (museumId) {
      fetch(`/api/reviews/museums/${museumId}`)
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
      // Handle the case where museumId is missing or invalid
      setError(new Error('Invalid museum ID'));
    }
  }, [museumId]);

  // Render museum reviews and handle errors here
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

export default MuseumReview;
