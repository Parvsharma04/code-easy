import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Team from "./Components/Team";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Demo from './Components/Demo'
import Framework from "./Components/Framework";
  
const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, settheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`${theme}`}>
      <Routes>
        <Route path="/" element={<Navbar theme={theme} settheme={settheme}/>}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/packages" element={<Demo />}/>
        <Route path="/register" element={<Login />}/>
        <Route path="/framework" element={<Framework />}/>
      </Routes>
    </div>
  );
};

export default App;





