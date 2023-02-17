import React from "react";
import { NavLink } from "react-router-dom";

function RestuarantItem({ restuarant }) {
  // const companyName = restuarant.name;

  // let capsing =
  //   companyName.charAt(0).toUpperCase() + companyName.slice(1).toLowerCase();

  return (
    <div>
      <div className="restuarant-heading">
        <NavLink className="underline" to={`/restuarants/${restuarant.id}`}>
          <p>{restuarant.name}</p>
        </NavLink>
        <p>{restuarant.cuisine}</p>
        <p>{restuarant.overall_rating}</p>
      </div>
    </div>
  );
}
export default RestuarantItem;
