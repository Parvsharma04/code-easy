import React, {useRef} from "react";
import "../styles/FormDocs.css";
import Navbar from "./Navbar";
import {Sidebar} from "./Sidebar";
import "../styles/Framework.css";
import BasicFormComponent from "../FrameworkComponent/BasicFormComponent";
import SignUpComponent from "../FrameworkComponent/SignUpComponent";
import LoginComponent from "../FrameworkComponent/LoginComponent"

const FormDocs = () => {
  const codeRef = useRef(null);

  const handleCopyToClipboard = () => {
    const codeElement = codeRef.current;
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      alert("Code copied to clipboard!");
    } catch (error) {
      console.error("Copy to clipboard failed:", error);
    }
  };

  return (
    <div className="framework">
        <Navbar />
      <div className="subContainer">
        <Sidebar />
        <div className="container">
          <div className="heading">
            <h1 id="title">Forms</h1>
            <h2>
              A form is an essential part of a website that allows users to
              input and submit data for various purposes.
            </h2>
          </div>  
          <div className="description">
            <h2>How it works ?</h2>
            <ol>
              <li>
                To use a form, you need to include all the form elements within
                a container with the class name '.form' for styling and
                responsiveness.
              </li>
              <li>
                You can customize the form by adding different input fields,
                checkboxes, radio buttons, etc., as needed.
              </li>
              <li>
                Styling classes like '.input', '.button', and '.textarea' are
                available for styling specific elements.
              </li>
            </ol>
          </div>

          <div className="variant1">
            <h2>Form Elements Overview</h2>
            <p>Explore the various form elements and their styling options:</p>
            <ul>
              <h3>Input Field:</h3>
              <li>
                .input: Represents the basic styling for input fields within the
                form.
              </li>

              <h3>Button:</h3>
              <li>.button: Styling for the form submission button.</li>

              <h3>Textarea:</h3>
              <li>.textarea: Styling for multiline text input fields.</li>
            </ul>

            <div className="render">
              <div className="up">
                <BasicFormComponent />
              </div>
                <hr />
                <div className="type">
                  <button className="copy-btn" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
                </div>
                <hr />
                <div className="down">                
                  <pre ref={codeRef}>
                    <code>                  
{`<div className="form-container">
  <h2 id="heading">Basic Form</h2>
  <form className="form-detail" action="#" method="get" id="myform">
    <input
      type="text"
      name="first_name"
      id="first_name"
      className="input-text"
      placeholder="First Name"
      required=""
    />
    <input
      type="text"
      name="last_name"
      id="last_name"
      className="input-text"
      placeholder="Last Name"
    />
    <input
      type="text"
      name="your_email"
      id="your_email"
      className="input-text"
      required=""
      pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
      placeholder="Your Email"
    />
    <input
      type="text"
      name="street"
      className="street"
      id="street"
      placeholder="Street + Nr"
      required=""
    />
    <input
      type="text"
      name="additional"
      className="additional"
      id="additional"
      placeholder="Additional Information"
    />
    <input
      type="text"
      name="zip"
      className="zip"
      id="zip"
      placeholder="Zip Code"
      required=""
    />
    <select name="country" className="country" id="country">
      <option value="country">Country</option>
    </select>
    <input
      type="text"
      name="phone"
      className="phone"
      id="phone"
      placeholder="Phone Number"
      required=""
    />
    <div className="agreement">
      <input type="checkbox" name="checkbox" required="" />
      <p>
        I do accept the
        <a href="#" className="text">
          Terms and Conditions
        </a>{" "}
        of your site.
      </p>
    </div>
    <input className="btn" type="submit" name="submit" defaultValue="Submit" />
  </form>
</div>`}
                    </code>
                  </pre>
              </div>
            </div>
            <div className="render">
              <div className="up">
                <LoginComponent />
              </div>
                <hr />
                <div className="type">
                  <button className="copy-btn" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
                </div>
                <hr />
                <div className="down">                
                  <pre ref={codeRef}>
                    <code>                  
{`<div className="login-container">
  <h2>Login</h2>
  <form action="#">
    <input type="text" id="username" name="username" placeholder="Username" />
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
</div>`}
                    </code>
                  </pre>
              </div>
            </div>
            <div className="render">
              <div className="up">
                <SignUpComponent />
              </div>
                <hr />
                <div className="type">
                  <button className="copy-btn" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
                </div>
                <hr />
                <div className="down">                
                  <pre ref={codeRef}>
                    <code>                  
{`<div className="signup-container">
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
</div>`}
                    </code>
                  </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDocs;
