import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  let navigate = useNavigate();
  return (
    <>
      <h1 className="welcome-page" onClick={() => navigate("/restaurants")}>
        Welcome to Rate My Restaurant
        <br></br>
        Click anywhere to start
      </h1>
    </>
  );
}

export default WelcomePage;
