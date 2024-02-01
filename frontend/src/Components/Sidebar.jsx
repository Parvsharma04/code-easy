import React from "react";
import "../styles/Sidebar.css";
import NavbarDocs from "./NavbarDocs";

const Sidebar = () => {
  return (
      <div className="w-64 bg-gray-50 border-r border-gray-200 sidebar">
        <div className="mb-10 mt-10 flex justify-center items-center">
            <input type="text" className="rounded" placeholder="Quick Search" />
            <button className="btn">Search</button>
        </div>

        <div className="mb-10 text-lg">
          <h3 className="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">
            Components
          </h3>

          <a
            href="/framework/navbar"
            className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
          >
            Navbar
          </a>
          <a
            href="/framework/form"
            className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
          >
            Form
          </a>
          <a
            href="/framework/progressBar"
            className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
          >
            Progress bar
          </a>
        </div>
    </div>
  );
};

export default Sidebar;
