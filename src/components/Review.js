import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditReview from "./EditReview";

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
      <div className="h">
        <h1>Company: {review.company_name}</h1>
        <p>Review: {review.review}</p>
        <p>Rating: {review.rating}</p>
        <p>Created at: {review.created_at}</p>
      </div>

      <button onClick={() => navigate(`/reviews/jo`)}>Edit Review</button>
      <button onClick={handleDelete}>Delete Review</button>
    </>
  );
}
export default Review;
