import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function Restuarant() {
  const [restuarant, setRestuarant] = useState({});

  console.log("rest", restuarant);

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
        <hr></hr>
      </div>
    </>
  );
}

export default Restuarant;
