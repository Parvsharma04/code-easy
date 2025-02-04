import React, { useRef } from "react";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";
import DynamicProgressBar from "../FrameworkComponent/DynamicProgressBar";
import StaticWPercentage from "../FrameworkComponent/StaticWPercentage";
import StaticProgressBar from "../FrameworkComponent/StaticProgressBar";
// import '../styles/ProgressBarDocs.css'
import Footer from "./Footer";

const ProgressBarDocs = ({ theme, settheme }) => {
  const staticRef = useRef();
  const dynamicRef = useRef();
  const percentageRef = useRef();

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
      <div className="w-full flex flex-row">
        <Sidebar theme={theme} settheme={settheme} />
        <hr
          className={`h-full w-1 ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        />
        <div
          className={`p-5 w-full navDiv overflow-y-scroll flex flex-wrap ${
            theme === "dark" ? "bg-black text-white" : "bg-white text-black"
          }`}
          style={{
            scrollbarWidth: "none",
          }}
        >
          <div className="heading w-full">
            {/* <p className="font-bold text-xl text-center pt-10">Progress Bar with Input</p> */}
            <h1
              id="title"
              className={`${
                theme === "dark" ? "bg-black text-white" : "bg-white text-black"
              } sm:text-sm lg:text-2xl text-center`}
            >
              Progress Bar With Input
            </h1>
          </div>
          <br />
          <div className="description pl-7 pr-7">
            <h2 className="font-bold sm:text-md md:text-xl">Overview: </h2>
            <p className="sm:text-sm md:text-lg">
              The Progress Bar with Input is a user interface component designed
              to visually represent the progress of a task while allowing users
              to provide input. It's a versatile element that combines progress
              tracking with user interaction.
            </p>
          </div>

          <div className="variant1 mx-auto">
            <br />
            <h1
              className={`text-left font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } sm:text-md md:text-xl`}
            >
              Dynamic:{" "}
            </h1>
            <div className="render">
              <div>{<DynamicProgressBar />}</div>
              <br />
              <hr />
              <div className="type">
                <button
                  className="copy-btn"
                  onClick={() => handleCopyToClipboard(dynamicRef)}
                >
                  Copy to Clipboard
                </button>
              </div>

              <hr />
              <div className="down">
                <pre ref={dynamicRef}>
                  <code className=" text-sm md:text-xl">{`<div class="container-dynamic">
        <div id="progress-container-dynamic">
          <div id="progress-bar-dynamic"></div>
        </div>
      </div>
  
      <div class="container-dynamic-input">
        <label for="percentageInput">Enter Percentage: </label>
        <input
          type="number"
          id="percentageInput"
          min="0"
          max="100"
          oninput="updateProgressBarDynamic(this.value)"
        />
      </div>`}</code>
                </pre>
              </div>
            </div>
          </div>
          <div className="variant2 mx-auto">
            <br />
            <h1
              className={`text-left font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } sm:text-md md:text-xl`}
            >
              Static With Percentage Counter:{" "}
            </h1>
            <div className="render">
              <div>{<StaticWPercentage />}</div>
              <br />
              <hr />
              <div className="type">
                <button
                  className="copy-btn"
                  onClick={() => handleCopyToClipboard(percentageRef)}
                >
                  Copy to Clipboard
                </button>
              </div>

              <hr />
              <div className="down">
                <pre ref={percentageRef}>
                  <code className=" text-sm md:text-xl">{`<div class="container-staticbar">
  <div id="progress-container-static">
    <div id="progress-bar-static"></div>
  </div>
</div>
<div class="container2-static-bar">
  <label for="percentageInput">Enter Percentage: </label>
  <input
    type="number"
    id="percentageInput"
    min="0"
    max="100"
    oninput="updateProgressBarStatic(this.value)"
  />
</div>`}</code>
                </pre>
              </div>
            </div>
          </div>
          <div className="variant3 mx-auto">
            <br />
            <h1
              className={`text-left font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              } sm:text-md md:text-xl`}
            >
              Static:{" "}
            </h1>
            <div className="render">
              <div>{<StaticProgressBar />}</div>
              <br />
              <hr />
              <div className="type">
                <button
                  className="copy-btn"
                  onClick={() => handleCopyToClipboard(staticRef)}
                >
                  Copy to Clipboard
                </button>
              </div>

              <hr />
              <div className="down">
                <pre ref={staticRef}>
                  <code className=" text-sm md:text-xl">{`<div class="container-staticbar">
  <div id="progress-container-static">
    <div id="progress-bar-static"></div>
  </div>
</div>
<div class="container2-static-bar">
  <label for="percentageInputStatic">Enter Percentage: </label>
  <input
    type="number"
    id="percentageInputStatic"
    min="0"
    max="100"
    oninput="updateProgressBarStaticWithoutPercentage(this.value)"
  />
</div>`}</code>
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

export default ProgressBarDocs;
