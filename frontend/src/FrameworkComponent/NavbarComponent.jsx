import React, { useEffect, useState } from 'react';
import './NavbarComponent.css';
import MenuIcon from '@mui/icons-material/Menu';

const NavbarComponent = () => {
  const [lightMode, setLightMode] = useState(
    localStorage.getItem('lightMode') || 'dark'
  );

  const toggleMenu = () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    // hamburgerMenu.classList.toggle('makeVisible');
    if(hamburgerMenu.style.display === "none"){
        hamburgerMenu.style.display = "flex";
    }
    else{
        hamburgerMenu.style.display = "none";
    }
  };

  const toggleLightMode = () => {
    const originalColor = 'rgb(111, 92, 182)';
    const newColor = 'rgb(50, 41, 85)';
    const nav = document.querySelector('nav');
    const hamburgerContent = document.getElementsByClassName(
      'hamburger-content'
    );

    if (lightMode === 'dark') {
      setLightMode('light');
      localStorage.setItem('lightMode', 'light');
      nav.style.backgroundColor = newColor;
      for (let i = 0; i < hamburgerContent.length; i++) {
        hamburgerContent[i].style.backgroundColor = newColor;
        hamburgerContent[i].style.color = 'white';
      }
    } else {
      setLightMode('dark');
      localStorage.setItem('lightMode', 'dark');
      nav.style.backgroundColor = originalColor;
      for (let i = 0; i < hamburgerContent.length; i++) {
        hamburgerContent[i].style.backgroundColor = originalColor;
        hamburgerContent[i].style.color = 'black';
      }
    }

    applyLightMode();
  };

  const applyLightMode = () => {
    const app = document.getElementsByTagName('HTML')[0];
    const nav = document.querySelector('nav');

    if (lightMode === 'dark') {
      app.setAttribute('light-mode', 'dark');
      nav.classList.add('dark-theme');
    } else {
      app.setAttribute('light-mode', 'light');
      nav.classList.remove('dark-theme');
    }
  };

  const reloadPageIfGreaterThan615 = () => {
    if (window.innerWidth > 615) {
      window.location.reload();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', reloadPageIfGreaterThan615);
    return () => {
      window.removeEventListener('resize', reloadPageIfGreaterThan615);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="primary-nav">
          <div className="primary-nav-logo">
            <h3>Codeeasy</h3>
          </div>
          <div className="primary-nav-link">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="secondary-nav">
          <input type="text" className="secondary-nav-searchbar" />
          <button className="secondary-nav-searchbtn nav-btnFont">Search</button>
          <li className="nav-item">
            <input
              type="checkbox"
              id="dark_toggler"
              className="dark_toggler"
              aria-label="Toggle Light Mode"
              onClick={() => toggleLightMode()}
              defaultChecked={lightMode === 'light'}
            />
          </li>
        </div>
        <div className="hamburger">
          <button id="btn" onClick={() => toggleMenu()}>
            <MenuIcon />
          </button>
        </div>
      </nav>
      <div id="hamburger-menu" className='makeVisible'>
        <ul>
          <li>
            <a
              style={{ background: 'rgb(111, 92, 182)' }}
              className="hamburger-content"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              style={{ background: 'rgb(111, 92, 182)' }}
              className="hamburger-content"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              style={{ background: 'rgb(111, 92, 182)' }}
              className="hamburger-content"
              href="#"
            >
              Contact
            </a>
          </li>
          <li>
            <div
              style={{ background: 'rgb(111, 92, 182)' }}
              className="hamburger-content serach-container"
            >
              <input type="text" className="serach-container-input" />
              <button className="serach-container-btn nav-btnFont">Search</button>
            </div>
          </li>
          <li
            style={{ background: 'rgb(111, 92, 182)', padding: '10px 5px' }}
            className="nav-item hamburger-content"
            id="togglebtn"
          >
            <input
              type="checkbox"
              id="dark_toggler themeChanger2"
              className="dark_toggler"
              aria-label="Toggle Light Mode"
              onClick={() => toggleLightMode()}
              defaultChecked={lightMode === 'light'}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarComponent;
