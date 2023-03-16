import React from "react";
import { NavLink } from "react-router-dom";

function RestaurantReview({ review }) {
  return (
    <div>
      <NavLink className="underline" to={`/reviews/${review.id}`}>
        <p>"{review.review}"</p>
      </NavLink>
    </div>
  );
}

export default RestaurantReview;
