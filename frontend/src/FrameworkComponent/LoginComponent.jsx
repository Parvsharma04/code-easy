import React from "react";
import "./LoginComponent.css";

const LoginComponent = () => {
  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <form action="#">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required=""
          />
          <button type="submit">Login</button>
        </form>
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
      </div>
    </>
  );
};

export default LoginComponent;
