import React, { useRef } from "react";
import "../styles/FormDocs.css";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";
import "../styles/Framework.css";
import BasicFormComponent from "../FrameworkComponent/BasicFormComponent";
import SignUpComponent from "../FrameworkComponent/SignUpComponent";
import LoginComponent from "../FrameworkComponent/LoginComponent";
import Footer from "./Footer";

const FormDocs = ({ theme, settheme }) => {
  const basicFormCodeRef = useRef(null);
  const loginCodeRef = useRef(null);
  const signUpCodeRef = useRef(null);

  const handleCopyToClipboard = (codeRef) => {
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
      <Navbar theme={theme} settheme={settheme} />
      <div className="w-full flex flex-row mt-20 fixed">
        <Sidebar theme={theme} settheme={settheme} />
        <hr
          className={`h-full w-1 ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        />

        <div
          className={`p-5 w-2/3 navDiv overflow-y-scroll flex flex-wrap ${
            theme === "dark" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div
            className={`heading ${
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <h1
              id="title"
              className={`${
                theme === "dark" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              Forms
            </h1>
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
                <button
                  className="copy-btn"
                  onClick={() => handleCopyToClipboard(basicFormCodeRef)}
                >
                  Copy to Clipboard
                </button>
              </div>
              <hr />
              <div className="down">
                <pre ref={basicFormCodeRef}>
                  <code>
                    {`<div class="form-container">
<h2>Basic Form</h2>
<form class="form-detail" action="#" method="get" id="myform">
  <input
    type="text"
    name="first_name"
    id="first_name"
    class="input-text"
    placeholder="First Name"
    required
  />
  <input
    type="text"
    name="last_name"
    id="last_name"
    class="input-text"
    placeholder="Last Name"
  />
  <input
    type="text"
    name="your_email"
    id="your_email"
    class="input-text"
    required
    pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
    placeholder="Your Email"
  />
  <input
    type="text"
    name="street"
    class="street"
    id="street"
    placeholder="Street + Nr"
    required
  />
  <input
    type="text"
    name="additional"
    class="additional"
    id="additional"
    placeholder="Additional Information"
  />
  <input
    type="text"
    name="zip"
    class="zip"
    id="zip"
    placeholder="Zip Code"
    required
  />
  <select name="country" class="country" id="country">
    <option value="country">Country</option>
  </select>
  <input
    type="text"
    name="phone"
    class="phone"
    id="phone"
    placeholder="Phone Number"
    required
  />

  <div class="agreement">
  <input type="checkbox" name="checkbox" required/>
  <p>I do accept the<a href="#" class="text">Terms and Conditions</a> of your site.</p>
</div>

<input class="btn" type="submit" name="submit" value="Submit" />

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
                <button
                  className="copy-btn"
                  onClick={() => handleCopyToClipboard(loginCodeRef)}
                >
                  Copy to Clipboard
                </button>
              </div>
              <hr />
              <div className="down">
                <pre ref={loginCodeRef}>
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
                <button
                  className="copy-btn"
                  onClick={() => handleCopyToClipboard(signUpCodeRef)}
                >
                  Copy to Clipboard
                </button>
              </div>
              <hr />
              <div className="down">
                <pre ref={signUpCodeRef}>
                  <code>
                    {`<div class="signup-container">
  <h2>Signup</h2>
  <form action="#">
    <input
      type="text"
      id="fullName"
      name="fullName"
      placeholder="Full Name"
      required
    />

    <input
      type="text"
      id="email"
      name="email"
      placeholder="Email"
      required
    />

    <input
      type="password"
      id="password"
      name="password"
      placeholder="Password"
      required
    />

    <button type="submit">Signup</button>
  </form>

  <p>
    Already have an account? <a href="#" class="login-link">Login here</a>
  </p>
</div>`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer theme={theme} settheme={settheme} />
    </div>
  );
};

export default FormDocs;
