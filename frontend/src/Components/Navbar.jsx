import React, { useEffect } from "react";
import "../styles/Navbar.css";
import logo_light from "../assets/logo-black.png";
import logo_dark from "../assets/logo-white.png";
import search_icon_light from "../assets/search-w.png";
import search_icon_dark from "../assets/search-b.png";
import toggle_light from "../assets/night.png";
import togggle_dark from "../assets/day.png";
import Login from "./Login";

const Navbar = ({ theme, settheme }) => {
  const toggle_mode = () => {
    theme == "light" ? settheme("dark") : settheme("light");
  };

  const mediumDeviceToggle = () => {
    let navbar = document.querySelector(".navbar");
    let right = document.querySelector(".right");
    let left_ul = document.querySelector(".left ul");

    if (right.style.display === "none") {
      right.style.display = "flex";
      right.style.justifyContent = "center";
      right.style.alignItems = "center";
      right.style.padding = "13px 0";
      navbar.style.flexDirection = "column";
    } else {
      right.style.display = "none";
      navbar.style.flexDirection = "row";
    }
    left_ul.style.display = left_ul.style.display === "none" ? "flex" : "none";
  };

  return (
    <div className="navbar fixed z-50">
      <div className="left">
        <h2 id="nav-logo" className={theme == "light" ? logo_light : logo_dark}>
          Codeeasy
        </h2>
        <ul id="nav-ul">
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/packages">
            <li id="packages">Packages</li>
          </a>
          <a href="/framework">
            <li>Framework</li>
          </a>
          <a href="/team">
            <li>Team</li>
          </a>
        </ul>
      </div>
      <div className="right">
        <div className="search-box">
          <input type="text" placeholder="Quick Search" className="pt-2" />
          <img
            src={theme == "light" ? search_icon_light : search_icon_dark}
            className="mr-2"
          />
        </div>
        <Login theme={theme} settheme={settheme} />
        <img
          onClick={() => {
            toggle_mode();
          }}
          src={theme == "light" ? toggle_light : togggle_dark}
          alt=""
          className="toggle-icon ml-2"
        />
      </div>

      <div className="hamburger w-6">
        <button id="menubtn" onClick={() => mediumDeviceToggle()}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
