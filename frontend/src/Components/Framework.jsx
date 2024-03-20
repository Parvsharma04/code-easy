import React, { useState } from "react";
// import  from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/Framework.css";
import { Sidebar } from "./Sidebar";
import { useRef } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { dark } from "@mui/material/styles/createPalette";

const Framework = ({ theme, settheme }) => {
  const codeRefCss = useRef(null);
  const codeRefJs = useRef(null);

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
      <div className="subContainer">
        <Sidebar theme={theme} settheme={settheme} />
        <div
          className={`p-5 quickStart mt-20 absolute ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-gray-50 text-black"
          }`}
          style={{
            width: "80vw",
            left: "20vw",
            height: "-webkit-fill-available",
          }}
        >
          <h1
            className={`text-2xl ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-gray-50 text-black"
            }`}
          >
            <LanguageIcon className="mr-2" />
            Include cdn link to your project
          </h1>
          <div className="csscdn flex items-start justify-center flex-col p-5 pl-3 mt-5 gap-5">
            <div className="pr-7 w-full border shadow-md p-2">
              <br />
              <h1
                className={`text-start text-3xl ml-2 flex justify-center ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-50 text-black"
                }`}
              >
                Css link
              </h1>
              <div className="type flex justify-end">
                <button
                  className="copy-btn p-2"
                  onClick={() => handleCopyToClipboard(codeRefCss)}
                >
                  Copy to Clipboard
                </button>
              </div>

              <hr />
              <div className="down flex justify-center">
                <pre ref={codeRefCss}>
                  <code>{`https://cdn.jsdelivr.net/gh/Arshdeep-13/codeeasy/cdn/index.css`}</code>
                </pre>
              </div>
            </div>
            <div className="pr-7 w-full border shadow-md p-2">
              <br />
              <h1
                className={`text-start text-3xl ml-2 flex justify-center ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-50 text-black"
                }`}
              >
                Js link
              </h1>
              <div className="type flex justify-end">
                <button
                  className="copy-btn p-2"
                  onClick={() => handleCopyToClipboard(codeRefJs)}
                >
                  Copy to Clipboard
                </button>
              </div>

              <hr />
              <div className="down flex justify-center">
                <pre ref={codeRefJs}>
                  <code>{`https://cdn.jsdelivr.net/gh/Arshdeep-13/codeeasy/cdn/script.js`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Framework;
