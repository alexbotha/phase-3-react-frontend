import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Review({ deleteReview }) {
  const [review, setReview] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();

  function handleDelete() {
    deleteReview(review);
    navigate("/reviews");
  }

  useEffect(() => {
    fetch(`http://localhost:9292/reviews/${id}`)
      .then((response) => response.json())
      .then((data) => setReview(data));
  }, [id]);

  return (
    <>
      <div className="rest-details">
        <h3>{review.company_name}</h3>
        <p>Review: {review.review}</p>
        <p>Rating: {review.rating}</p>
        <p>Created at: {review.created_at}</p>
      </div>
      <br></br>
      <hr></hr>

      <button onClick={() => navigate(`/reviews/${id}/edit`)}>
        Edit Review
      </button>
      <button onClick={handleDelete}>Delete Review</button>
    </>
  );
}
export default Review;
