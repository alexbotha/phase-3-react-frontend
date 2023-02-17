import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Review from "./Review";
import RestuarantContainer from "./RestuarantContainer";
import Restuarant from "./Restuarant";
import AddRestuarant from "./AddRestuarant";
import ReviewContainer from "./ReviewContainer";
import AddReview from "./AddReview";
import WelcomePage from "./WelcomePage";
import EditReview from "./EditReview";

function App() {
  const [restuarants, setRestuarants] = useState([]);
  const [reviews, setReviews] = useState([]);

  let location = useLocation();

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

  function updatingReviewList(newReviewDetails) {
    setReviews([...reviews, newReviewDetails]);
  }

  function deleteReview(deletedReviewDetails) {
    const postDelete = reviews.filter((reviewObj) => {
      return reviewObj.id !== deletedReviewDetails.id;
    });
    setReviews(postDelete);
    fetch(`http://localhost:9292/reviews/${deletedReviewDetails.id}`, {
      method: "DELETE",
    });
  }

  return (
    <>
      {location.pathname === "/" ? (
        <WelcomePage />
      ) : (
        <div className="app">
          <Header />
          <NavBar restuarants={restuarants} />
          <Routes>
            <Route
              path="/restuarants"
              element={<RestuarantContainer restuarants={restuarants} />}
            />
            <Route
              path="/reviews"
              element={
                <ReviewContainer reviews={reviews} restuarants={restuarants} />
              }
            />

            <Route path="/restuarants/:id" element={<Restuarant />} />
            <Route
              path="/reviews/:id"
              element={<Review deleteReview={deleteReview} />}
            />
            <Route
              exact
              path="/restuarants/new"
              element={
                <AddRestuarant
                  updatingRestuarantList={updatingRestuarantList}
                  restuarants={restuarants}
                />
              }
            />
            <Route
              path="/reviews/new"
              element={<AddReview updatingReviewList={updatingReviewList} />}
            />
            <Route path="/reviews/:id/edit" element={<EditReview />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
