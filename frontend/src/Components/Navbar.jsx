import React, { useState } from "react";
import "../styles/Navbar.css";
import search_icon_light from "../assets/search-w.png";
import search_icon_dark from "../assets/search-b.png";
import toggle_light from "../assets/night.png";
import togggle_dark from "../assets/day.png";
import siteLogo from "../assets/SiteLogo.png";
import Login from "./Login";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";
import "../styles/searchStyle.css";

function Hit({ hit }) {
  return (
    <a
      className="p-2 flex justify-center items-center w-44 text-xl hover:bg-gray-200 hover:text-black"
      href={`${hit.links}`}
    >
      <h3>{hit.name}</h3>
    </a>
  );
}

const Navbar = ({ theme, settheme }) => {
  const toggle_mode = () => {
    theme === "light" ? settheme("dark") : settheme("light");
  };
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");

  const mediumDeviceToggle = (e) => {
    const navbar = document.querySelector(".navbar");
    const navul = document.getElementById("nav-ul");
    const right = document.querySelector(".right");

    if (navbar.classList.contains("h-20")) {
      navbar.classList.remove("h-20");
      navbar.classList.add("h-36");
      navbar.classList.add("flex-col");
      navul.style.display = "flex";
      right.style.display = "flex";
    } else {
      navbar.classList.remove("h-36");
      navbar.classList.remove("flex-col");
      navbar.classList.add("h-20");
      navul.style.display = "none";
      right.style.display = "none";
    }
  };
  const searchClient = algoliasearch(
    "C9Q6MP24BK",
    "d09aab2b529184bed61459be5e32da21",
    {
      preserveSharedStateOnUnmount: true,
    }
  );

  const [query, setQuery] = useState(""); // State to hold the search query

  return (
    <div className="absolute top-0 navbar z-50 h-20 flex">
      <div className="left">
        <a href="/">
          <img src={siteLogo} alt="Codeeasy" />
        </a>
        <ul id="nav-ul">
          <a href="/">
            <li>Home</li>
          </a>
          {isAuthenticated && (
            <a href="/packages">
              <li id="packages">Packages</li>
            </a>
          )}
          <a href="/framework">
            <li>Framework</li>
          </a>
          <a href="/team">
            <li>Team</li>
          </a>
          <a href="/contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
      <div className="right">
        <div>
          <InstantSearch searchClient={searchClient} indexName="codeEasy">
            <SearchBox
              className="ais-InstantSearch__root"
              placeholder="Quick Search"
              onChangeCapture={(e) => setQuery(e.target.value)}
            />
            {query && (
              <Hits
                hitComponent={Hit}
                className={`flex border absolute top-16 ${
                  theme === "dark"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } rounded-md p-3`}
              />
            )}
          </InstantSearch>
        </div>
        <Login theme={theme} settheme={settheme} />
        <img
          onClick={() => {
            toggle_mode();
          }}
          src={theme === "light" ? toggle_light : togggle_dark}
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
