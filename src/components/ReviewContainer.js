import React from "react";
import ReviewItem from "./ReviewItem";

function ReviewContainer({ reviews }) {
  console.log("here", reviews);
  return (
    <>
      <div className="searchbar"></div>
      {reviews.map((review) => (
        <ReviewItem key={review.id} id={review.id} review={review} />
      ))}
    </>
  );
}
export default ReviewContainer;
