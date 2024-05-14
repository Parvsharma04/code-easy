import React from "react";
import Navbar from "./Navbar";
import "../styles/Framework.css";
import { Sidebar } from "./Sidebar";
import { useRef } from "react";
import Footer from "./Footer";
import LanguageIcon from "@mui/icons-material/Language";

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
    <div className="block framework w-full h-full">
      <Navbar theme={theme} settheme={settheme} />
      <div className="w-full flex flex-row mt-20 fixed">
        <Sidebar theme={theme} settheme={settheme} />
        <hr
          className={`h-full w-1 ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        />
        <div
          className={`w-2/3 flex flex-col flex-wrap ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-gray-50 text-black"
          }`}
        >
          <h1
            className={`lg:text-2xl text-xl mt-5 ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-gray-50 text-black"
            }`}
          >
            <LanguageIcon className="mr-2" />
            Include cdn link to your project
          </h1>
          <div className="csscdn flex items-start justify-center flex-col w-full flex-wrap p-5 pl-3 mt-5 gap-5">
            <div className="pr-7 border shadow-md p-2 w-full">
              <br />
              <h1
                className={`text-start lg:text-3xl text-xl flex justify-center ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-50 text-black"
                }`}
              >
                Css link
              </h1>
              <div className="type flex justify-end">
                <button
                  className="bg-red-700 rounded p-1.5"
                  onClick={() => handleCopyToClipboard(codeRefCss)}
                >
                  Copy to Clipboard
                </button>
              </div>

              <hr />
              <code
                ref={codeRefCss}
                className="down flex justify-center text-md flex-wrap break-words"
                style={{
                  wordBreak: "break-all",
                }}
              >
                https://codeeasyserver.onrender.com/css
              </code>
            </div>
            <div className="pr-7 border shadow-md p-2 w-full">
              <br />
              <h1
                className={`text-start lg:text-3xl text-xl ml-2 flex justify-center ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-50 text-black"
                }`}
              >
                Js link
              </h1>
              <div className="type flex justify-end">
                <button
                  className="bg-red-700 rounded p-1.5"
                  onClick={() => handleCopyToClipboard(codeRefJs)}
                >
                  Copy to Clipboard
                </button>
              </div>

              <hr />
              <code
                ref={codeRefJs}
                className="down flex justify-center text-md flex-wrap break-words"
                style={{
                  wordBreak: "break-all",
                }}
              >
                https://codeeasyserver.onrender.com/js
              </code>
            </div>
          </div>
        </div>
      </div>
      <Footer theme={theme} settheme={settheme} />
    </div>
  );
};

export default Framework;
