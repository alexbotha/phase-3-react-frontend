import React from "react";
import { NavLink } from "react-router-dom";

function RestuarantItem({ id, filteredRestuarant }) {
  return (
    <div>
      <NavLink className="rest-homepage" to={`/restuarants/${id}`}>
        <h3>{filteredRestuarant.name}</h3>
      </NavLink>
    </div>
  );
}
export default RestuarantItem;
