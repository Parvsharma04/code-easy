import React from "react";
import "../styles/FormDocs.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../styles/Framework.css";

const FormDocs = () => {
  return (
    <div className="framework">
        <Navbar />
      <div className="subContainer">
        <Sidebar />
        <div className="container">
          <div className="heading">
            <h1>Forms</h1>
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
              {/* <Form /> */}
              <span>form</span>
              {/* Include your form rendering code or a code snippet here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDocs;
