import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ toggleForm, multiplefunc }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
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
        <h1>Register</h1>
      </div>

      <form className="userform" onSubmit={handleSubmit}>
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name"
        />
        <input
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button
          className="button-login"
          onClick={() => multiplefunc(true)}
          type="submit"
        >
          Sign up
        </button>
      </form>
      <div className="sign-up" onClick={() => navigate("/")}>
        Have an account? Login here
      </div>
    </div>
  );
}

export default Register;
