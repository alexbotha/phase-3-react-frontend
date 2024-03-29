import React from "react";
import ReviewItem from "./ReviewItem";

function ReviewContainer({ reviews }) {
  const review = reviews.map((review) => (
    <ReviewItem key={review.id} id={review.id} review={review} />
  ));
  return (
    <>
      <div className="review-heading">
        <h2>Company</h2>
        <h2>Review</h2>
        <h2>Rating</h2>
      </div>
      {review}
      <br></br>
      <hr></hr>
    </>
  );
}
export default ReviewContainer;
