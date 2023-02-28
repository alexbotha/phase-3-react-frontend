import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddReview({ updatingReviewList, restuarants }) {
  let navigate = useNavigate();
  const { restuarantId } = useParams();

  const [restuarant, setR] = useState("");
  const [newReview, setNewReview] = useState({
    review: "",
    rating: "",
  });

  useEffect(() => {
    let restuarant = restuarants.find((r) => r.id === parseInt(restuarantId));
    setR(restuarant);
  }, [restuarantId, restuarants]);

  function handleChange(e) {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/restuarants/${restuarantId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then((newReviewDetails) => updatingReviewList(newReviewDetails));
    navigate(`/restuarants/${restuarantId}`);
  }

  return (
    <div>
      <h3 className="rest-details">{`Create a review for ${
        restuarant ? restuarant.name : ""
      }`}</h3>
      <form className="form" onSubmit={handleSubmit}>
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
      <br></br>
      <hr></hr>
    </div>
  );
}

export default AddReview;
