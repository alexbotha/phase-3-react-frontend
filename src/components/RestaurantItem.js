import React from "react";
import { NavLink } from "react-router-dom";

function RestaurantItem({ id, restaurant }) {
  // const companyName = restaurant.name;

  // let capsing =
  //   companyName.charAt(0).toUpperCase() + companyName.slice(1).toLowerCase();

  return (
    <div>
      <div className="restaurant-heading">
        <NavLink className="underline" to={`/restaurants/${id}`}>
          <p>{restaurant.name}</p>
        </NavLink>
        <p>{restaurant.cuisine}</p>
        <p>{restaurant.overall_rating}</p>
      </div>
    </div>
  );
}
export default RestaurantItem;
