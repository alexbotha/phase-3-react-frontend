import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Review from "./Review";
import RestuarantContainer from "./RestuarantContainer";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [loggedIn, setLoggedIn] = useState(false);

  let navigate = useNavigate();

  function toggleForm(formName) {
    setCurrentForm(formName);
  }

  function multiplefunc() {
    setLoggedIn(!loggedIn);
    navigate("/");
  }

  return (
    <div className="app">
      {loggedIn === true ? (
        <>
          <Header />
          <NavBar multiplefunc={multiplefunc} />

          <Routes>
            <Route path="/restuarants" element={<RestuarantContainer />} />
          </Routes>

          <Routes>
            <Route path="/reviews" element={<Review />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <Login toggleForm={toggleForm} multiplefunc={multiplefunc} />
              }
            />
          </Routes>

          <Routes>
            <Route
              path="/register"
              element={<Register multiplefunc={multiplefunc} />}
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
