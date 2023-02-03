import React from "react";
import { useNavigate } from "react-router-dom";

function AddRestuarantButton() {
  let navigate = useNavigate();
  return (
    <button onClick={() => navigate("/restuarants/new")}>
      Add new restuarant
    </button>
  );
}

export default AddRestuarantButton;
