import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Team from "./Components/Team";
import Accordian2 from "./Components/Accordian2";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Demo from './Components/Demo'

const App = () => {
  // const current_theme = localStorage.getItem("current_theme");
  // const [theme, settheme] = useState(current_theme ? current_theme : "light");

  // useEffect(() => {
  //   localStorage.setItem("current_theme", theme);
  // }, [theme]);

  return (
    // <div className={`container ${theme}`}>
    //   <Routes>
    //     <Route path="/" element={<Navbar theme={theme} settheme={settheme}/>}/>
    //     <Route path="/team" element={<Team />}/>
    //     <Route path="/packages" element={<Accordion2 />}/>
    //     <Route path="/register" element={<Login />}/>

    //   </Routes>
    // </div>
    <div>
      {/* <Accordian2/> */}
      <Demo/>
    </div>
  );
};

export default App;





