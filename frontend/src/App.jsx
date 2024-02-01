import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Team from "./Components/Team";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Framework from "./Components/Framework";
import Packages from "./Components/Packages";
import Footer from "./Components/Footer"
import NavbarDocs from "./Components/NavbarDocs";
import FormDocs from "./Components/FormDocs";
  
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
        <Route path="/packages" element={<Packages />}/>
        <Route path="/register" element={<Login />}/>
        <Route path="/framework" element={<Framework />}/>
        <Route path="/framework/navbar" element={<NavbarDocs />}/>
        <Route path="/framework/form" element={<FormDocs />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;





