import React from "react";
import { useNavigate } from "react-router-dom";

function AddRestaurantButton() {
  let navigate = useNavigate();
  return (
    <button
      className="add-res-btn"
      onClick={() => navigate("/restaurants/new")}
    >
      Add new restaurant
    </button>
  );
}

export default AddRestaurantButton;
