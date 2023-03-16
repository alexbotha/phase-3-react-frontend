import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import RestaurantReview from "./RestaurantReview";

function Restaurant({ restaurants }) {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState({
    reviews: [],
  });

  useEffect(() => {
    let restaurant = restaurants.find((r) => r.id === parseInt(id));
    setRestaurant(restaurant);
  }, [id, restaurants]);

  const reviews = restaurant.reviews.map((review) => (
    <RestaurantReview key={review.id} review={review} restaurant={restaurant} />
  ));

  return (
    <>
      <div className="rest-details">
        <h3>{restaurant.name}</h3>
        <p>Rating: {restaurant.overall_rating}</p>
        <p>Cuisine: {restaurant.cuisine}</p>
        <p>Website: {restaurant.website}</p>
        <br></br>
        <h3>Reviews</h3>
        {reviews}
        <br></br>
      </div>

      <hr></hr>
      <div className="xxx">
        <NavLink to={`/restaurants/${restaurant.id}/reviews/new`}>
          Add review for {restaurant.name}
        </NavLink>
      </div>
    </>
  );
}

export default Restaurant;
