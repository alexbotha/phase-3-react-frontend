import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import RestuarantReview from "./RestuarantReview";

function Restuarant({ restuarants }) {
  const { id } = useParams();

  const [restuarant, setRestuarant] = useState({
    reviews: [],
  });

  console.log(restuarant);

  useEffect(() => {
    let restuarant = restuarants.find((r) => r.id === parseInt(id));
    setRestuarant(restuarant);
  }, [id, restuarants]);

  const reviews = restuarant.reviews.map((review) => (
    <RestuarantReview key={review.id} review={review} restuarant={restuarant} />
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
      </div>

      <hr></hr>
      <div className="xxx">
        <NavLink to={`/restuarants/${restuarant.id}/reviews/new`}>
          Add review for {restuarant.name}
        </NavLink>
      </div>
    </>
  );
}

export default Restuarant;
