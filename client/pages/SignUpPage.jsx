import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SignUpPage() {
  // same TODOs as login, instead navigate to '/'
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = { username: user, password: password };
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then((res) => {
        setLogin(true);
        console.log("user created and logged in on signuppage.jsx");
      })
      .catch((error) => {
        console.log("unable to signup user", error);
      });
  };

  //RENDER
  return (
    <div className="loginCont">
      <div className="user-login-box">
        <h1 className="login-header">Create a new Account:</h1>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="formLine">
            <label className="login-text" htmlFor="username">
              Username/Email
            </label>
            <input
              className="user-input"
              type="text"
              required
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="formLine">
            <label className="login-text" htmlFor="password">
              Password
            </label>
            <input
              className="user-input"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="submit">Submit</button>
        </form>
        <div className="login-footer">
          Already have an account? <Link to="/">Sign in here!</Link>
        </div>
        {isLoggedIn && <HomePage />}
      </div>
    </div>
  );
}

export default SignUpPage;
