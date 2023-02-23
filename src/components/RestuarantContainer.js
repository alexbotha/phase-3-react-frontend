import React from "react";
import RestuarantItem from "./RestuarantItem";

import AddRestuarantButton from "./AddRestuarantButton";

function RestuarantContainer({ restuarants }) {
  const restuarantItem = restuarants.map((restuarant) => (
    <RestuarantItem
      key={restuarant.id}
      id={restuarant.id}
      restuarant={restuarant}
    />
  ));
  return (
    <>
      <div className="restuarant-heading">
        <h2>Company</h2>
        <h2>Cuisine</h2>
        <h2>Rating</h2>
      </div>
      {restuarantItem}
      <br></br>
      <hr></hr>
      <AddRestuarantButton />
    </>
  );
}
export default RestuarantContainer;
