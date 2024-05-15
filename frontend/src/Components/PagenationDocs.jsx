import React, { useRef } from "react";
import Navbar from "./Navbar";
import "../styles/NavbarDocs.css";
import "../styles/Framework.css";
import { Sidebar } from "./Sidebar";
import Footer from "./Footer";
import NavbarComponent from "../FrameworkComponent/NavbarComponent";
import Pagenation from "../FrameworkComponent/Pagenation";

const PagenationDocs = ({ theme, settheme }) => {
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
              Pagenation
            </h1>
            <p>
              A pagination component in Bootstrap is a navigational element used
              to divide content into discrete pages, allowing users to navigate
              between these pages easily. It provides a structured and
              user-friendly interface for accessing different sections of
              content
            </p>
          </div>
          <div className="description w-fit">
            <h2 className="mb-1">How it works ?</h2>
            <ul>
              <li id="desc">
                For using a pagenation you are required to wrap all the elements
                in the div under the class name 'pagenation' for responsiveness
              </li>
              <li id="desc">
                Display a set of page numbers and navigation controls (like
                "Previous" and "Next") to allow users to switch between
                different pages of content.
              </li>
              <li id="desc">
                Maintain the current page state and update it based on user
                interaction with the pagination controls.
              </li>
              <li id="desc">
                Fetch and display the content corresponding to the current page
                from the data source (e.g., an array or API).
              </li>
            </ul>
          </div>

          <div className="variant1 mb-5 w-fit">
            <h2 className="mb-1">Navigating Brilliance</h2>
            <p>Swiftly flip through content with our dynamic pagination</p>
            <ul className="w-fit">
              <h3>Primary Navigation Section:</h3>
              <li>
                .pagenation: Represents the container in which whole pagenation
                component is present.
              </li>
              <li>
                .pagenation ul: It represents the number of pages present in
                pagenation component.
              </li>

              <h3>JavaScript Functions:</h3>
              <li>
                JavaScript Functions:
                <p>
                  createPagination(): The createPagination function generates
                  HTML for pagination buttons based on the current page and
                  total pages. It dynamically creates "Previous" and "Next"
                  buttons, along with page number buttons. It adjusts the
                  displayed page range based on the current page's position.
                  Finally, it updates the HTML content of the pagination
                  container with the generated buttons.
                </p>

              </li>
            </ul>
            <div className="render w-fit">
              <div className="nav-up w-fit">
                <Pagenation />
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
                    {`<div class="pagination">
        <ul> <!--pages or li are comes from javascript --> </ul>
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

export default PagenationDocs;
