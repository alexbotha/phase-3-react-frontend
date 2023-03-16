import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRestaurant({ updatingRestaurantList }) {
  let navigate = useNavigate();

  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    cuisine: "",
    overall_rating: "",
    website: "",
  });

  function handleChange(e) {
    setNewRestaurant({
      ...newRestaurant,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/restaurants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    })
      .then((response) => response.json())
      .then((newRestDetails) => updatingRestaurantList(newRestDetails));
    navigate("/restaurant");
  }

  return (
    <div>
      <h3 className="rest-details">Create a new restaurant</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
          value={newRestaurant.name}
          autoFocus={true}
        />
        <input
          type="text"
          name="cuisine"
          onChange={handleChange}
          placeholder="Cuisine"
          value={newRestaurant.imageUrl}
        />
        <input
          type="text"
          name="overall_rating"
          onChange={handleChange}
          placeholder="Rating"
          value={newRestaurant.position}
        />
        <input
          type="text"
          name="website"
          onChange={handleChange}
          placeholder="Website..."
          value={newRestaurant.age}
        />

        <br />
        <br />

        <button className="addRestaurantButton" type="submit">
          Add Restaurant
        </button>
      </form>
      <br></br>
      <hr></hr>
    </div>
  );
}

export default AddRestaurant;
