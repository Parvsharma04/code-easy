import React, { useEffect, useState } from "react";
import Team from "./Components/Team";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Framework from "./Components/Framework";
import Packages from "./Components/Packages";
import NavbarDocs from "./Components/NavbarDocs";
import FormDocs from "./Components/FormDocs";
import ProgressBarDocs from "./Components/ProgressBarDocs";
import AccordianDocs from "./Components/AccordianDocs";
import LandingPage from "./Components/LandingPage";
import SpinnerDocs from "./Components/SpinnerDocs";
import PopoverDocs from "./Components/PopoverDocs";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, settheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    if (theme == "light") {
      document.body.style.background = "white";
    } else {
      document.body.style.background = "#212121";
    }
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  const isAuthenticated = sessionStorage.getItem("isAuthenticated");

  return (
    <div className={`${theme}`}>
      <Routes>
        <Route
          path="/"
          element={<LandingPage theme={theme} settheme={settheme} />}
        />
        <Route
          path="/team"
          element={<Team theme={theme} settheme={settheme} />}
        />
        {isAuthenticated && (
          <Route
            path="/packages"
            element={<Packages theme={theme} settheme={settheme} />}
          />
        )}
        <Route
          path="/register"
          element={<Login theme={theme} settheme={settheme} />}
        />
        <Route
          path="/framework"
          element={<Framework theme={theme} settheme={settheme} />}
        />
        <Route
          path="/framework/navbar"
          element={<NavbarDocs theme={theme} settheme={settheme} />}
        />
        <Route
          path="/framework/form"
          element={<FormDocs theme={theme} settheme={settheme} />}
        />
        <Route
          path="/framework/progressbar"
          element={<ProgressBarDocs theme={theme} settheme={settheme} />}
        />
        <Route
          path="/framework/accordian"
          element={<AccordianDocs theme={theme} settheme={settheme} />}
        />
        <Route
          path="/framework/spinners"
          element={<SpinnerDocs theme={theme} settheme={settheme} />}
        />
        <Route
          path="/framework/popover"
          element={<PopoverDocs theme={theme} settheme={settheme} />}
        />
      </Routes>
    </div>
  );
};

export default App;
