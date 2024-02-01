import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/Framework.css"

const Framework = () => {
  return (
    <div className="framework">
      <Navbar />
      <div className="subContainer">
        <Sidebar />
      </div>
    </div>
  );
};

export default Framework;
