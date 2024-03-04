import React, {useRef} from "react";
import "../styles/SpinnerDocs.css";
import Navbar from "./Navbar";
import "../styles/Framework.css"
import {Sidebar} from "./Sidebar";
import Spinners from "./Spinner1";
import Spinners2 from "./Spinner2";
import Shapespinners from "./Spinner3";

const SpinnerDocs = () => {
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
            <h1 id="title">Spinner</h1>
            <p>
            The spinner component is used to indicate a loading status of the content that you're fetching from your database 
            </p>
          </div>
          <div className="description">
            <h2 className="mb-1">How it works ?</h2>
            <ul>
              <li id="desc">
                For using a Spinner component for your webpage you are required to wrap all the elements in
                the div under the class name '.spinner-container'.
              </li>
              <li id="desc">
                In class name '.spinner-container' your spinner is going to display. 
              </li>
              <li id="desc">
                class name '.spinner-dropdown' contains shape names like circle,rectangle,triangle and square .
              </li>
              <li id="desc">
               On selecting the shape name from the dropdown menu the spinner will be shown of that shape.
              </li>
            </ul>
          </div>

          <div className="variant1">
            <h2 className="mb-1">Spinning into the Future: Explore Our Next-Gen Spinner Component!</h2>
            <p>
              Unleashing the power of our Spinner component. Following is the
              description of each and everything :-
            </p>
            <ul>
              <h3>New Functionalities:</h3>
              <li>
              Our spinner component offers users the flexibility to choose from a variety of shapes, allowing for a customized and engaging user experience.
              </li>
              <li>
              With a convenient dropdown menu placed adjacent to the spinner, users can effortlessly select their preferred shape with a single click, enhancing usability.
              </li>
              <li>
              Seamlessly integrate our spinner component with your existing UI, effortlessly blending with your design aesthetics while providing an interactive and polished interface.
              </li>
             

              <h3>Improved Features:</h3>
              <li>
              Elevate the visual appeal of your application or website with our diverse range of spinner shapes, including circles, squares, triangles, and more, catering to different design preferences.
              </li>
              <li>
              Experience fluid and smooth animations as the spinner transitions between shapes, ensuring a delightful user interaction that captivates attention and enhances user engagement.
              </li>
              <li>
              Tailor the appearance and behavior of the spinner component to align with your specific requirements, offering customization options that empower you to create a unique and memorable user experience.
              </li>
              <li>Built with performance in mind, our spinner component guarantees optimal speed and efficiency, delivering a seamless user experience across various devices and platforms without compromising on quality.</li>
              <li>Designed with developers in mind, our spinner component offers easy integration and comprehensive documentation, streamlining the implementation process and saving valuable development time and resources.</li>
              <li>
                <h3>Media Queries:</h3>
                <p>
                  Media queries are used in this for showing rotation of a spinner.
                </p>
              </li>

              
              <h3>JavaScript Interaction:</h3>
              <li>
                JavaScript Interaction:
                <p>
                   .spinner-container class added the shape you choose from the dropdown memu. 
                </p>
                <p>
                  .shape-dropdown class provide you to choose the shape of you desire.
                </p>
               
              </li>

              <h3>JavaScript Functions:</h3>
              <li>
                JavaScript Functions:
                <p>
                const Shapespinners = (): This is a functional component named Shapespinners. It renders a spinner based on the selected shape.
                </p>
                <p>
                const handleShapeChange = (shape): This is a function handleShapeChange that takes a shape argument. It updates the selectedShape state variable with the new shape value passed as an argument.
                </p>
                <p>const renderSpinners = (): This function renderSpinners dynamically renders spinner elements based on the selectedShape state variable. It returns JSX elements representing spinner shapes based on a switch-case statement.</p>
               
              </li>
            </ul>
            
            <div className="render">
              <div className="nav-up">
                <Spinners />
              </div>
                <hr />
                <div className="type">
                  <button className="copy-btn" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
                </div>
                <hr />
                <div className="down">                
                  <pre ref={codeRef}>
                    <code>                  
{`<div class="spinner-container">
  <div class="spinner"></div>
</div>`}
                    </code>
                  </pre>
              </div>
            </div>
            <div className="render">
              <div className="nav-up">
                        <Spinners2 />
              </div>
                <hr />
                <div className="type">
                  <button className="copy-btn" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
                </div>
                <hr />
                <div className="down">                
                  <pre ref={codeRef}>
                    <code>                  
{`<div>
    <div class="spinner2-container">
    <div id="spinner2"></div>
    </div>
</div>`}
                    </code>
                  </pre>
              </div>
            </div>
            <div className="render">
              <div className="nav-up">
                        <Shapespinners />
              </div>
                <hr />
                <div className="type">
                  <button className="copy-btn" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
                </div>
                <hr />
                <div className="down">                
                  <pre ref={codeRef}>
                    <code>                  
{`<div class="spinner-container" id="spinnerContainer">
    <div id="rotation">
    <div class="spinner circle"></div>
    <div class="spinner circle"></div>
    <div class="spinner circle"></div>
    </div>
    
    <select class="shape-dropdown" id="shapeDropdown">
    <option value="circle">Circle</option>
    <option value="square">Square</option>
    <option value="triangle">Triangle</option>
    <option value="rectangle">Rectangle</option>
    </select>
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

export default SpinnerDocs;