// MuseumReviews.js

import { useEffect, useState } from 'react';

function MuseumReviews({ museumId }) {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, [museumId]);

  // Render museum reviews and handle errors here

  return (
    <div>
      {/* Render museum reviews and handle errors here */}
    </div>
  );
}

export default MuseumReviews;
