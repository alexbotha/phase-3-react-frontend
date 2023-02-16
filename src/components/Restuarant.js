import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import RestuarantReview from "./RestuarantReview";
function Restuarant() {
  const [restuarant, setRestuarant] = useState({
    reviews: [],
  });

  let navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/restuarants/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setRestuarant(data);
      });
  }, [params]);

  const reviews = restuarant.reviews.map((review) => (
    <RestuarantReview key={review.id} review={review} />
  ));

  return (
    <>
      <div className="rest-details">
        <h3>{restuarant.name}</h3>
        <p>Rating: {restuarant.overall_rating}</p>
        <p>Cuisine: {restuarant.cuisine}</p>
        <p>Website: {restuarant.website}</p>
        <br></br>
        <h3>Reviews</h3>
        {reviews}
        <br></br>

        <hr></hr>
      </div>
    </>
  );
}

export default Restuarant;
