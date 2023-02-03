import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Review() {
  const [review, setReview] = useState({});

  console.log("??", review);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/reviews/${id}`)
      .then((response) => response.json())
      .then((data) => setReview(data));
  }, [id]);

  return (
    <>
      <div className="h">
        <p>Review: {review.review}</p>
        <p>Rating: {review.rating}</p>
        <p>Created at: {review.created_at}</p>
      </div>
    </>
  );
}
export default Review;
