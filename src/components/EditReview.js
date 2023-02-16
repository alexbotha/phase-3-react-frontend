import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditReview({ editingReview }) {
  let navigate = useNavigate();
  const { id } = useParams();
  const [editReview, setEditReview] = useState({
    review: "",
    rating: "",
    restuarant_id: "",
  });

  function handleChange(e) {
    setEditReview({
      ...editReview,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editReview),
    })
      .then((response) => response.json())
      .then((editReviewDetails) => editingReview(editReviewDetails));
    navigate("/reviews");
  }

  return (
    <div>
      <h3>Made a mistake? Correct your review now!</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="review"
          onChange={handleChange}
          placeholder="Review"
          value={editReview.review}
        />
        <input
          type="text"
          name="rating"
          onChange={handleChange}
          placeholder="Rating"
          value={editReview.rating}
        />
        <br />
        <br />
        <button className="addReviewButton" type="submit">
          Edit Review
        </button>
      </form>
    </div>
  );
}

export default EditReview;
