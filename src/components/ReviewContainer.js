import React from "react";
import ReviewItem from "./ReviewItem";
import AddReviewButton from "./AddReviewButton";

function ReviewContainer({ reviews }) {
  return (
    <>
      <div className="review-heading">
        <h2>Company</h2>
        <h2>Review</h2>
        <h2>Rating</h2>
      </div>
      {reviews.map((review) => (
        <ReviewItem key={review.id} id={review.id} review={review} />
      ))}
      <AddReviewButton />
    </>
  );
}
export default ReviewContainer;
