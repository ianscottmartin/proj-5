// ArtistReviews.js

import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';

function ArtistReviews({ artistId }) {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, [artistId]);

  // Render reviews and handle errors here

  return (
    <div>
      {/* Render reviews and handle errors here */}
    </div>
  );
}

export default ArtistReviews;
