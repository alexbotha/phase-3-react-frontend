import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Review from "./Review";
import RestaurantContainer from "./RestaurantContainer";
import Restaurant from "./Restaurant";
import AddRestaurant from "./AddRestaurant";
import ReviewContainer from "./ReviewContainer";
import AddReview from "./AddReview";
import WelcomePage from "./WelcomePage";
import EditReview from "./EditReview";
import NotFound from "./NotFound";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [reviews, setReviews] = useState([]);

  let location = useLocation();

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
      .then((r) => r.json())
      .then((data) => {
        setRestaurants(data);
      });
    fetch("http://localhost:9292/reviews")
      .then((r) => r.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  console.log(restaurants);

  function updateR(deets) {
    const newReviews = reviews.map((r) => {
      if (r.id === deets.id) {
        return deets;
      } else {
        return r;
      }
    });

    const newRestaurant = restaurants.map((rest) => {
      if (rest.id === deets.restaurant_id) {
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

    setRestaurants(newRestaurant);
    setReviews(newReviews);
  }

  function updatingRestaurantList(newRestDetails) {
    if (newRestDetails.id !== null) {
      return setRestaurants([...restaurants, newRestDetails]);
    } else {
      return alert(`${newRestDetails.name} already exists. Try another`);
    }
  }

  function updatingReviewList(newReviewDetails) {
    const newRestaurant = restaurants.map((rest) => {
      if (rest.id === newReviewDetails.restaurant_id) {
        rest.reviews = [...rest.reviews, newReviewDetails];
        return rest;
      } else {
        return rest;
      }
    });
    setRestaurants(newRestaurant);
    setReviews([...reviews, newReviewDetails]);
  }

  function deleteReview(deletedReviewDetails) {
    const postDelete = reviews.filter((reviewObj) => {
      return reviewObj.id !== deletedReviewDetails.id;
    });

    const newRestaurant = restaurants.map((rest) => {
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
    setRestaurants(newRestaurant);

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
          <NavBar restaurants={restaurants} />
          <Routes>
            <Route
              path="/restaurants"
              element={<RestaurantContainer restaurants={restaurants} />}
            />
            <Route
              path="/reviews"
              element={
                <ReviewContainer reviews={reviews} restaurants={restaurants} />
              }
            />
            <Route
              path="/restaurants/:id"
              element={
                restaurants.length > 0 ? (
                  <Restaurant restaurants={restaurants} />
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
              path="/restaurants/new"
              element={
                <AddRestaurant
                  updatingRestaurantList={updatingRestaurantList}
                  restaurants={restaurants}
                />
              }
            />
            <Route
              path="/restaurants/:restaurantId/reviews/new"
              element={
                <AddReview
                  updatingReviewList={updatingReviewList}
                  restaurants={restaurants}
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
