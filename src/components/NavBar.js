import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ multiplefunc }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <div className="nav-link">
            <NavLink to="/restuarants">Restuarants</NavLink>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link">
            <NavLink to="/user">Your Profile</NavLink>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link">
            <NavLink to="/reviews">Reviews</NavLink>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link">
            <div className="logout" onClick={multiplefunc}>
              Logout
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
