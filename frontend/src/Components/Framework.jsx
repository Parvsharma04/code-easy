import React, {useState} from "react";
// import  from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/Framework.css"
import { Sidebar } from "./Sidebar";

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
