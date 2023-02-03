import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <div className="nav-link">
            <NavLink className="navlink" to="/restuarants">
              Home
            </NavLink>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link">
            <NavLink className="navlink" to="/user">
              User profile
            </NavLink>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link">
            <NavLink className="navlink" to="/reviews">
              Reviews
            </NavLink>
          </div>
        </li>
      </ul>

      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link">
            <div className="logout">Logout</div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
