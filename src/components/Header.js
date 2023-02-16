import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="header">
        <h2 onClick={() => navigate("/")}>Review My Restuarant</h2>

        <p className="underHeader">The home of restuarant reviews</p>
      </div>
    </React.Fragment>
  );
}

export default Header;
