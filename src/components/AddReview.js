import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddReview({ updatingReviewList }) {
  let navigate = useNavigate();

  const [newReview, setNewReview] = useState({
    review: "",
    rating: "",
    company_name: "",
    restuarant_id: "",
  });

  function handleChange(e) {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then((newReviewDetails) => updatingReviewList(newReviewDetails));
    navigate("/restuarants");
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="company_name"
          onChange={handleChange}
          placeholder="Company name"
          value={newReview.company_name}
        />
        <input
          type="text"
          name="review"
          onChange={handleChange}
          placeholder="Review"
          value={newReview.review}
        />
        <input
          type="text"
          name="rating"
          onChange={handleChange}
          placeholder="Rating"
          value={newReview.rating}
        />
        <br />
        <br />
        <button className="addReviewButton" type="submit">
          Add Review
        </button>
      </form>
    </div>
  );
}

export default AddReview;
