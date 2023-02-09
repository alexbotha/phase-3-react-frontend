import React from "react";
import { useNavigate } from "react-router-dom";

function AddReviewButton() {
  let navigate = useNavigate();
  return <button onClick={() => navigate("/reviews/new")}>Add a review</button>;
}

export default AddReviewButton;
