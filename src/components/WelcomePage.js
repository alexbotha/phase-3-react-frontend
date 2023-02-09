import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  let navigate = useNavigate();
  return (
    <>
      <h1 className="welcome-page" onClick={() => navigate("/restuarants")}>
        Welcome to Rate My Restuarant
        <br></br>
        Click anywhere to start
      </h1>
    </>
  );
}

export default WelcomePage;
