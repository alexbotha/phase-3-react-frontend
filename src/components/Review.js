import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Review() {
  const [review, setReview] = useState({});

  const { id } = useParams();

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
      <button>Edit Review</button>
      <button>Delete Review</button>
    </>
  );
}
export default Review;
