import React, { useRef } from "react";
import Navbar from "./Navbar";
import "../styles/NavbarDocs.css";
import "../styles/Framework.css";
import { Sidebar } from "./Sidebar";
import Footer from "./Footer";
import NavbarComponent from "../FrameworkComponent/NavbarComponent";

const NavbarDocs = ({ theme, settheme }) => {
  const codeRef = useRef(null);

  const handleCopyToClipboard = () => {
    const codeElement = codeRef.current;
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      alert("Code copied to clipboard!");
    } catch (error) {
      console.error("Copy to clipboard failed:", error);
    }
  };

  return (
    <div className="framework">
      <Navbar theme={theme} settheme={settheme} />
      <div className="w-full flex flex-row mt-20 fixed">
        <Sidebar theme={theme} settheme={settheme} />
        <hr
          className={`h-full w-1 ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        />
        <div
          className={`p-5 w-2/3 navDiv overflow-y-scroll flex flex-wrap ${
            theme === "dark" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div className={`heading`}>
            <h1
              id="title"
              className={`${
                theme === "dark" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              Navbar
            </h1>
            <p>
              A navigation bar is a link to appropriate section/pages in a
              website that helps reader in traversing the online document
            </p>
          </div>
          <div className="description w-fit">
            <h2 className="mb-1">How it works ?</h2>
            <ul>
              <li id="desc">
                For using a navbar you are required to wrap all the elements in
                the div under the class name '.navbar' for responsiveness
              </li>
              <li id="desc">
                class name '.left' places your logo and navigation links to the
                leftside for your navbar but make sure your root class includes
                '.navbar'
              </li>
              <li id="desc">
                class name '.right' contains searchbar, login and toggle
                functionalities which will be aligned right to the screen
              </li>
              <li id="desc">
                When the max-width of your screen is 400px, the class hamburger
                will collaspe the navigation functionalities
              </li>
            </ul>
          </div>

          <div className="variant1 mb-5 w-fit">
            <h2 className="mb-1">Navigating Brilliance</h2>
            <p>
              Unleashing the power of our navbar component. Following is the
              description of each and everything :-
            </p>
            <ul className="w-fit">
              <h3>Primary Navigation Section:</h3>
              <li>
                .primary-nav: Represents the primary navigation container.
              </li>
              <li>
                .primary-nav-logo: Container for the logo within the primary
                navigation.
              </li>
              <li>
                .primary-nav-logo h3: Styling for the logo text within the
                primary navigation.
              </li>
              <li>
                .primary-nav-link: Container for the primary navigation links.
              </li>
              <li>
                .primary-nav-link ul li: Styling for the list items within the
                primary navigation links.
              </li>
              <li>
                .primary-nav-link ul a: Styling for the anchor tags within the
                primary navigation links.
              </li>

              <h3>Secondary Navigation Section:</h3>
              <li>
                .secondary-nav: Represents the secondary navigation container.
              </li>
              <li>
                .secondary-nav-searchbar: Styling for the search bar in the
                secondary navigation.
              </li>
              <li>
                .secondary-nav-searchbtn: Styling for the search button in the
                secondary navigation.
              </li>
              <li>.dark_toggler: Styling for the dark mode toggle checkbox.</li>
              <li>.hamburger: Represents the hamburger menu container.</li>
              <li>
                .hamburger #btn: Styling for the button inside the hamburger
                menu.
              </li>

              <h3>Hamburger Menu Section:</h3>
              <li>#hamburger-menu: Container for the hamburger menu.</li>
              <li>
                #hamburger-menu ul: Styling for the unordered list inside the
                hamburger menu.
              </li>
              <li>
                #hamburger-menu ul a: Styling for the anchor tags within the
                hamburger menu links.
              </li>
              <li>
                #hamburger-menu .serach-container: Styling for the search
                container within the hamburger menu.
              </li>
              <li>
                #hamburger-menu #serach-container-btn: Styling for the search
                button within the hamburger menu.
              </li>

              <h3>Media Queries:</h3>
              <li>
                Media Queries:
                <p>
                  Media queries are used for responsive design, adjusting styles
                  based on screen width.
                </p>
              </li>

              <h3>Dark Mode Toggle:</h3>
              <li>.dark_toggler: Styling for the dark mode toggle switch.</li>
              <li>
                .dark_toggler:before: Styling for the toggle switch button.
              </li>
              <li>
                .dark_toggler:checked: Styling when the dark mode is activated.
              </li>

              <h3>JavaScript Interaction:</h3>
              <li>
                JavaScript Interaction:
                <p>
                  .makeVisible: Class added dynamically to make the hamburger
                  menu visible.
                </p>
                <p>
                  .dark-theme: Class added dynamically to the navigation when in
                  dark mode.
                </p>
                <p>
                  .hamburger-content: Class applied to elements in the hamburger
                  menu for styling.
                </p>
              </li>

              <h3>JavaScript Variables:</h3>
              <li>
                JavaScript Variables:
                <p>const nav: Represents the navigation element.</p>
                <p>const hamburger: Represents the hamburger button.</p>
                <p>
                  const hamburgerMenu: Represents the hamburger menu element.
                </p>
                <p>
                  const hamburgerContent: Represents elements with the class
                  'hamburger-content' (array).
                </p>
              </li>

              <h3>JavaScript Functions:</h3>
              <li>
                JavaScript Functions:
                <p>
                  toggleMenu(): Toggles the visibility of the hamburger menu.
                </p>
                <p>
                  toggle_light_mode(): Toggles between light and dark modes.
                </p>
                <p>applyLightMode(): Applies the chosen light or dark mode.</p>
                <p>
                  reloadPageIfGreaterThan615(): Reloads the page if the window
                  width is greater than 615 pixels.
                </p>
              </li>
            </ul>
            <div className="render w-fit">
              <div className="nav-up w-fit">
                <NavbarComponent />
              </div>
              <hr />
              <div className="type w-fit">
                <button className="copy-btn" onClick={handleCopyToClipboard}>
                  Copy to Clipboard
                </button>
              </div>
              <hr />
              <div className="down w-fit">
                <pre ref={codeRef}>
                  <code>
                    {`<nav id="nav-container">
<div class="primary-nav">
  <div class="primary-nav-logo">
    <h3>Codeeasy</h3>
  </div>
  <div class="primary-nav-link">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</div>
<div class="secondary-nav">
  <input type="text" class="secondary-nav-searchbar" />
  <button class="secondary-nav-searchbtn nav-btnFont">Search</button>
  <li class="nav-item">
    <input
      type="checkbox"
      id="dark_toggler"
      class="dark_toggler"
      aria-label="Toggle Light Mode"
      onclick="toggle_light_mode()"
      checked
    />
  </li>
</div>
<div id="nav-hamburger">
  <button id="nav-btn"><i class="fas fa-bars"></i></button>
</div>
</nav>
<div id="nav-hamburger-menu">
<ul>
  <li>
    <a
      style="background: rgb(111, 92, 182)"
      class="nav-hamburger-content"
      href="#"
      >Home</a
    >
  </li>
  <li>
    <a
      style="background: rgb(111, 92, 182)"
      class="nav-hamburger-content"
      href="#"
      >About</a
    >
  </li>
  <li>
    <a
      style="background: rgb(111, 92, 182)"
      class="nav-hamburger-content"
      href="#"
      >Contact</a
    >
  </li>
  <li>
    <div
      style="background: rgb(111, 92, 182)"
      class="nav-hamburger-content nav-serach-container"
    >
      <input type="text" class="nav-serach-container-input" />
      <button class="nav-serach-container-btn nav-btnFont">Search</button>
    </div>
  </li>
  <li
    style="background: rgb(111, 92, 182)"
    class="nav-item nav-hamburger-content"
    id="nav-togglebtn"
  >
    <input
      type="checkbox"
      id="dark_toggler themeChanger2"
      class="dark_toggler"
      aria-label="Toggle Light Mode"
      onclick="toggle_light_mode()"
      checked
    />
  </li>
</ul>
</div>`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer theme={theme} settheme={settheme} />
    </div>
  );
};

export default NavbarDocs;
