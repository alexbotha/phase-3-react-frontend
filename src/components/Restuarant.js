import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

function Restuarant() {
  const [restuarant, setRestuarant] = useState({});

  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/restuarants/${id}`)
      .then((response) => response.json())
      .then((data) => setRestuarant(data));
  }, [id]);

  return (
    <>
      <div className="rest-details">
        <h3>{restuarant.name}</h3>
        <p>Rating: {restuarant.overall_rating}</p>
        <p>Cuisine: {restuarant.cuisine}</p>
        <p>Website: {restuarant.website}</p>
        <br></br>
        <button onClick={() => navigate(`/reviews/new`)}>
          Create a review for {`${restuarant.name}`}
        </button>
        <hr></hr>
      </div>
    </>
  );
}

export default Restuarant;
