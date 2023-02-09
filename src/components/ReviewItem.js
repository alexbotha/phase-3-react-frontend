import React from "react";
import { NavLink } from "react-router-dom";

function ReviewItem({ id, review }) {
  return (
    <div>
      <div className="review-heading">
        <p>{review.company_name}</p>
        <NavLink className="underline" to={`/reviews/${id}`}>
          <p>Click for more info</p>
        </NavLink>
        <p>{review.rating}</p>
      </div>
    </div>
  );
}

export default ReviewItem;
