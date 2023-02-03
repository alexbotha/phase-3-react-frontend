import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Review from "./Review";
import RestuarantContainer from "./RestuarantContainer";
import Restuarant from "./Restuarant";
import AddRestuarant from "./AddRestuarant";
import ReviewContainer from "./ReviewContainer";

function App() {
  const [restuarants, setRestuarants] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/restuarants")
      .then((r) => r.json())
      .then((data) => {
        setRestuarants(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then((r) => r.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  function updatingRestuarantList(newRestDetails) {
    setRestuarants([...restuarants, newRestDetails]);
  }

  return (
    <div className="app">
      <Header />
      <NavBar />

      <Routes>
        <Route
          path="/restuarants"
          element={<RestuarantContainer restuarants={restuarants} />}
        />
        <Route
          path="/reviews"
          element={<ReviewContainer reviews={reviews} />}
        />

        <Route path="/restuarants/:id" element={<Restuarant />} />
        <Route path="/reviews/:id" element={<Review />} />
        <Route
          exact
          path="/restuarants/new"
          element={
            <AddRestuarant updatingRestuarantList={updatingRestuarantList} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
