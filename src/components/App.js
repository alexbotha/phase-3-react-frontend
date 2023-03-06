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
    fetch("http://localhost:9292/reviews")
      .then((r) => r.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  console.log(restuarants);

  function updateR(deets) {
    const newReviews = reviews.map((r) => {
      if (r.id === deets.id) {
        return deets;
      } else {
        return r;
      }
    });

    const newRestuarant = restuarants.map((rest) => {
      if (rest.id === deets.restuarant_id) {
        rest.reviews = rest.reviews.map((r) => {
          if (r.id === deets.id) {
            return deets;
          } else {
            return r;
          }
        });
        return rest;
      } else {
        return rest;
      }
    });

    setRestuarants(newRestuarant);
    setReviews(newReviews);
  }

  function updatingRestuarantList(newRestDetails) {
    restuarants.filter((res) => {
      if (res.name !== newRestDetails.name) {
        return setRestuarants([...restuarants, newRestDetails]);
      } else {
        alert("Restuarant already exists. Try another");
        return setRestuarants(restuarants);
      }
    });
  }

  function updatingReviewList(newReviewDetails) {
    const newRestuarant = restuarants.map((rest) => {
      if (rest.id === newReviewDetails.restuarant_id) {
        rest.reviews = [...rest.reviews, newReviewDetails];
        return rest;
      } else {
        return rest;
      }
    });
    setRestuarants(newRestuarant);
    setReviews([...reviews, newReviewDetails]);
  }

  function deleteReview(deletedReviewDetails) {
    const postDelete = reviews.filter((reviewObj) => {
      return reviewObj.id !== deletedReviewDetails.id;
    });

    const newRestuarant = restuarants.map((rest) => {
      if (rest.id === deletedReviewDetails.restuarant_id) {
        rest.reviews = rest.reviews.filter(
          (r) => r.id !== deletedReviewDetails.id
        );
        return rest;
      } else {
        return rest;
      }
    });

    setReviews(postDelete);
    setRestuarants(newRestuarant);

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
            <Route
              path="/restuarants/:id"
              element={
                restuarants.length > 0 ? (
                  <Restuarant restuarants={restuarants} />
                ) : null
              }
            />
            <Route
              path="/reviews/:id"
              element={
                reviews.length > 0 ? (
                  <Review deleteReview={deleteReview} reviews={reviews} />
                ) : null
              }
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
              path="/restuarants/:restuarantId/reviews/new"
              element={
                <AddReview
                  updatingReviewList={updatingReviewList}
                  restuarants={restuarants}
                />
              }
            />

            <Route
              path="/reviews/:id/edit"
              element={
                reviews.length > 0 ? (
                  <EditReview reviews={reviews} updateR={updateR} />
                ) : null
              }
            />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
