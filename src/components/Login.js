import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login({ toggleForm, multiplefunc }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="user">
      <div className="header">
        <h2>Review My Restuarant</h2>
        <p className="underHeader">The home of local reviews</p>
        <br></br>
        <h1>Login</h1>
      </div>

      <form className="userform" onSubmit={handleSubmit}>
        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button
          className="button-login"
          onClick={() => multiplefunc(true)}
          type="submit"
        >
          Log In
        </button>
      </form>
      <div className="sign-up" onClick={() => navigate("/register")}>
        New here? Sign up for an account
      </div>
    </div>
  );
}

export default Login;
