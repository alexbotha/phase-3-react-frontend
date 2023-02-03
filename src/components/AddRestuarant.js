import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRestuarant({ updatingRestuarantList }) {
  let navigate = useNavigate();

  const [newRestuarant, setNewRestuarant] = useState({
    name: "",
    cuisine: "",
    overall_rating: "",
    website: "",
  });

  function handleChange(e) {
    setNewRestuarant({
      ...newRestuarant,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/restuarants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestuarant),
    })
      .then((response) => response.json())
      .then((newRestDetails) => updatingRestuarantList(newRestDetails));
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
          value={newRestuarant.name}
        />
        <input
          type="text"
          name="cuisine"
          onChange={handleChange}
          placeholder="Cuisine"
          value={newRestuarant.imageUrl}
        />
        <input
          type="text"
          name="overall_rating"
          onChange={handleChange}
          placeholder="Rating"
          value={newRestuarant.position}
        />
        <input
          type="text"
          name="website"
          onChange={handleChange}
          placeholder="Website..."
          value={newRestuarant.age}
        />

        <br />
        <br />

        <button
          className="addRestuarantButton"
          type="submit"
          onClick={() => navigate("/restuarants")}
        >
          Add Restuarant
        </button>
      </form>
    </div>
  );
}

export default AddRestuarant;
