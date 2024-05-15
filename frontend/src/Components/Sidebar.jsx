import React from "react";
import "../styles/Sidebar.css";
import "react-resizable/css/styles.css";

export const Sidebar = ({ theme, setTheme }) => {
  return (
    <div
      className={`w-1/2 md:w-1/4 top-20 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-50"
      } border-r border-gray-200 sidebar `}
    >
      {/* <div className="mb-10 mt-10 flex justify-center items-center quickContainer">
        <input
          type="text"
          className={`rounded quickSearch responsiveSearch h-11 pl-3 w-44 ${
            theme === "dark" ? "bg-gray-700 text-white" : "text-black bg-white"
          }`}
          placeholder="Quick Search"
        />
        <button
          className={`btn responsiveBtn ${
            theme === "dark"
              ? "bg-gray-700 text-white"
              : "bg-blue-500 text-white"
          }`}
        >
          Search
        </button>
      </div> */}

      <div className="mb-10 mt-10 text-lg flex justify-center items-start flex-col">
        <h3 className="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">
          Components
        </h3>

        <a
          href="/framework/navbar"
          className={`flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          Navbar
        </a>
        <a
          href="/framework/form"
          className={`flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          Form
        </a>
        <a
          href="/framework/accordian"
          className={`flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          Accordian
        </a>
        <a
          href="/framework/progressBar"
          className={`flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          Progress bar
        </a>
        <a
          href="/framework/spinners"
          className={`flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          Spinners
        </a>
        <a
          href="/framework/popover"
          className={`flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          Popover
        </a>
<<<<<<< HEAD
        <a
          href="/framework/pagenation"
          className={`flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          Pagenation
        </a>
       
      
       
        
       
=======
>>>>>>> 0dc7c2b5c97d97f14f500d262f5bf7b136e63554
      </div>
    </div>
  );
};
