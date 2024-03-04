import React from 'react'
import "./SignUpComponent.css"

const SignUpComponent = () => {
  return (
    <>
     <div className="signup-container">
    <h2>Signup</h2>
    <form action="#">
        <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="Full Name"
        required=""
        />
        <input
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        required=""
        />
        <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        required=""
        />
        <button type="submit">Signup</button>
    </form>
    <p>
        Already have an account?{" "}
        <a href="#" className="login-link">
        Login here
        </a>
    </p>
    </div> 
    </>
  )
}

export default SignUpComponent
