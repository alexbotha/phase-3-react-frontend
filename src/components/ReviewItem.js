import React from "react";
import { NavLink } from "react-router-dom";

function ReviewItem({ id, review }) {
  return (
    <div>
      <NavLink className="review-homepage" to={`/reviews/${id}`}>
        <h3>Review {review.id} </h3>
        <p>Company name: {review.company_name}</p>
      </NavLink>
    </div>
  );
}

export default ReviewItem;
