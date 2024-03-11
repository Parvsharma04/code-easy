import React, {useState} from "react";
// import  from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/Framework.css"
import { Sidebar } from "./Sidebar";

const Framework = ({theme, settheme}) => {
  return (
    <div className="framework">
      <Navbar theme={theme} settheme={settheme}/>
      <div className="subContainer">
      <Sidebar theme={theme} settheme={settheme}/>
      </div>
    </div>
  );
};

export default Framework;
