import React, { useState } from "react";
// import  from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/Framework.css";
import { Sidebar } from "./Sidebar";
import LanguageIcon from "@mui/icons-material/Language";
import { dark } from "@mui/material/styles/createPalette";

const Framework = ({ theme, settheme }) => {
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
            width: "77vw",
            left: "23vw",
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
          <div className="csscdn flex items-start justify-center flex-col p-5 pl-3 mt-5 border shadow-md">
            <h1
              className={`text-start text-xl ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-50 text-black"
              }`}
            >
              Css link
            </h1>
            <code>
              https://cdn.jsdelivr.net/gh/Arshdeep-13/codeeasy/cdn/index.css
            </code>
          </div>
          <div className="jscdn flex items-start justify-center flex-col p-5 pl-3 border shadow-md">
            <h1
              className={`text-start text-xl ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-50 text-black"
              }`}
            >
              Js link
            </h1>
            <code>
              https://cdn.jsdelivr.net/gh/Arshdeep-13/codeeasy/cdn/script.js
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Framework;
