import React from "react";
import RestaurantItem from "./RestaurantItem";

import AddRestaurantButton from "./AddRestaurantButton";

function RestaurantContainer({ restaurants }) {
  const restaurantItem = restaurants.map((restaurant) => (
    <RestaurantItem
      key={restaurant.id}
      id={restaurant.id}
      restaurant={restaurant}
    />
  ));
  return (
    <>
      <div className="restaurant-heading">
        <h2>Company</h2>
        <h2>Cuisine</h2>
        <h2>Rating</h2>
      </div>
      {restaurantItem}
      <br></br>
      <hr></hr>
      <div className="xxx">
        <AddRestaurantButton />
      </div>
    </>
  );
}
export default RestaurantContainer;
