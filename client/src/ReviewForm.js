
// import { Formik } from 'formik';
import { useState } from 'react';

function ReviewForm({ entityType, entityId, onReviewSubmit }) {
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitting(true);

    fetch(`/api/reviews/${entityType}/${entityId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    })
      .then((response) => {
        setSubmitting(false);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle success, e.g., refresh the reviews or provide user feedback
        onReviewSubmit(data);
      })
      .catch((error) => {
        setSubmitting(false);

        // Handle the error and provide user feedback if needed
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your review..."
        disabled={submitting}
      />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  );
}

export default ReviewForm;









// // ReviewForm.js
// import { Formik } from 'formik';
// import { useState } from 'react';

// function ReviewForm({ entityType, entityId, onReviewSubmit }) {
//   const [text, setText] = useState('');
//   const [submitting, setSubmitting] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setSubmitting(true);

//     fetch(`/api/reviews/${entityType}/${entityId}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ text }),
//     })
//       .then((response) => {
//         setSubmitting(false);

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Handle success, e.g., refresh the reviews or provide user feedback
//         onReviewSubmit(data);
//       })
//       .catch((error) => {
//         setSubmitting(false);

//         // Handle the error and provide user feedback if needed
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Write your review..."
//         disabled={submitting}
//       />
//       <button type="submit" disabled={submitting}>
//         {submitting ? 'Submitting...' : 'Submit Review'}
//       </button>
//     </form>
//   );
// }

// export default ReviewForm;
