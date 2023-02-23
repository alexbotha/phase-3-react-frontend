import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Review({ deleteReview }) {
  const { id } = useParams();
  let navigate = useNavigate();

  const [review, setReview] = useState({});

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
      <div className="left">
        <button onClick={() => navigate(`/reviews/${id}/edit`)}>
          Edit Review
        </button>
      </div>
      <div className="right">
        <button onClick={handleDelete}>Delete Review</button>
      </div>
    </>
  );
}
export default Review;
