import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  let navigate = useNavigate();
  return (
    <>
      <h1>Page not found</h1>
      <button onClick={() => navigate("/restuarants")}>
        Click to return to the home page
      </button>
    </>
  );
}

export default NotFound;
