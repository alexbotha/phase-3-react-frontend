import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditReview({ updateR, reviews }) {
  let navigate = useNavigate();
  const { id } = useParams();

  const [review, setReview] = useState("");
  const [details, setDetails] = useState({
    review: "",
    rating: "",
  });

  

  useEffect(() => {
    let review = reviews.find((r) => r.id === parseInt(id));
    setReview(review);
    setDetails(review);
  }, [reviews, id]);

  function handleChange(e) {
    setDetails({
      ...details,
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
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((editReviewDetails) => updateR(editReviewDetails));
    navigate(`/reviews/${id}`);
  }

  return (
    <div>
      <h3 className="rest-details">{`Edit review for ${
        review ? review.company_name : ""
      }`}</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="review"
          onChange={handleChange}
          placeholder="Review"
          value={details.review}
        />
        <input
          type="text"
          name="rating"
          onChange={handleChange}
          placeholder="Rating"
          value={details.rating}
        />
        <br />
        <br />
        <button className="addReviewButton" type="submit">
          Update review
        </button>
      </form>
      <br></br>
      <hr></hr>
    </div>
  );
}

export default EditReview;
