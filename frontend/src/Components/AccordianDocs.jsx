import React, { useRef } from "react";
import "../styles/FormDocs.css";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";
import "../styles/Framework.css";
import "../styles/AccordionDocs.css";
import AccordianComponent from "../FrameworkComponent/AccordianComponent";
import SearchAccordianComponent from "../FrameworkComponent/SearchAccordianComponent";
import SortaccordianComponent from "../FrameworkComponent/SortAccordianComponent";
import Footer from "./Footer";
const AccordianDocs = ({ theme, settheme }) => {
  const basicRef = useRef(null);
  const searchRef = useRef();
  const sortRef = useRef();

  const handleCopyToClipboard = (codeRef) => {
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
      <div className="w-full flex flex-row">
        <Sidebar theme={theme} settheme={settheme} />
        <hr
          className={`h-full w-1 ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        />
        <div
          className={`p-5 w-3/4 navDiv overflow-y-scroll flex flex-wrap ${
            theme === "dark" ? "bg-black text-white" : "bg-white text-black"
          }`}
          style={{
            scrollbarWidth: "none",
          }}
        >
          <div className="heading">
            <h1
              id="title"
              className={`${
                theme === "dark" ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              Accordion
            </h1>
            <p>
              Accordion is a user interface element, often used in web
              development, where sections of content can expand or collapse with
              user interaction
            </p>
          </div>
          <div className="description">
            <h2 className="mb-1">How it works ?</h2>
            <ul>
              <li id="desc">
                User Interaction: The accordion works based on user
                interactions, typically a click or tap on a section header.
              </li>
              <li id="desc">
                Toggle Mechanism: When a section header is clicked, a toggle
                mechanism is triggered, expanding or collapsing the associated
                content
              </li>
              <li id="desc">
                Animation: The expansion and collapse are often accompanied by
                smooth animations to enhance the user experience.
              </li>
              <li id="desc">
                State Management: The accordion keeps track of the state of each
                section, ensuring only one or multiple sections are expanded
                based on the design.
              </li>
              <li id="desc">
                Implementation: HTML, CSS, and JavaScript (or libraries like
                jQuery) are commonly used to structure, style, and add
                interactivity to the accordion.
              </li>
            </ul>
          </div>

          <div className="variant1">
            <h2 className="mb-1">CLASSES</h2>
            <p>
              <h3>
                Unleashing the power of our accordion component. Following is
                the description of each and every class :-
              </h3>
            </p>

            <ul>
              <li>
                <h3>Accordion Container:</h3>

                <p>class="accordion"</p>
                <p>
                  <b>Description:</b> This class is applied to the container
                  that wraps all accordion items.
                </p>
              </li>
              <li>
                <h3>Accordion Item:</h3>

                <p>class="accordion-item"</p>
                <p>
                  <b>Description:</b> Applied to each individual accordion item,
                  representing a section within the accordion.
                </p>
              </li>
              <li>
                <h3>Accordion Item Heading:</h3>

                <p>class="accordion-header"</p>
                <p>
                  <b>Description:</b> Used for the heading of each accordion
                  item, often containing a clickable button to toggle the
                  content.
                </p>
              </li>
              <li>
                <h3>Toggle Button:</h3>

                <p>class="accordion-button"</p>
                <p>
                  <b>Description:</b> Represents the clickable button within the
                  accordion header that triggers the expansion or collapse of
                  the content.
                </p>
              </li>
              <li>
                <h3>Accordion Content:</h3>

                <p>class="accordion-collapse"</p>
                <p>
                  <b>Description:</b> Represents the container for the accordion
                  item's content, which can expand or collapse.
                </p>
              </li>
              <li>
                <h3>Collapsed State:</h3>

                <p>class="collapse"</p>
                <p>
                  <b>Description:</b> Indicates that the accordion content is
                  initially collapsed and not visible.
                </p>
              </li>
              <li>
                <h3>Expanded State:</h3>

                <p>class="show"</p>
                <p>
                  <b>Description:</b> Indicates that the accordion content is in
                  the expanded state and visible.
                </p>
              </li>
              <li>
                <h3>Accordion Body/Content Area:</h3>

                <p>class="accordion-body"</p>
                <p>
                  <b>Description:</b> Represents the area within the accordion
                  content where detailed information or other elements can be
                  placed.
                </p>
              </li>
              <li>
                <h3>Parent Container for Accordion Items:</h3>

                <p>data-bs-parent="#yourAccordionId"</p>
                <p>
                  <b>Description:</b> Used in the button element to define the
                  parent container for the accordion items. Replace
                  yourAccordionId with the actual ID of the accordion container.
                </p>
              </li>
              <li>
                <h3>Role Attributes for Accessibility:</h3>

                <p>role="button" on the accordion button.</p>
                <p>role="region" on the accordion content.</p>

                <p>
                  <b>Description:</b> Role attributes help in making the
                  accordion component accessible to users with disabilities by
                  defining the purpose of each element.
                </p>
              </li>
              <p>
                <b>
                  These classes collectively enable the creation of a functional
                  and styled accordion component in a Bootstrap-based project.
                </b>
              </p>
            </ul>

            <div className="render">
              <div className="accordian-up">
                <AccordianComponent />
              </div>
              <hr />
              <div className="type">
                <button
                  className="copy-btn"
                  onClick={() => handleCopyToClipboard(basicRef)}
                >
                  Copy to Clipboard
                </button>
              </div>
              <hr />
              <div className="down">
                <pre ref={basicRef}>
                  <code>
                    {`<div class="accordion-wrapper" id="accordionWrapper">
  <div class="accordion-container" id="accordionContainer"></div>
</div>`}
                  </code>
                </pre>
              </div>
            </div>
            <div className="render">
              <div className="accordian-up">
                <SearchAccordianComponent />
              </div>
              <hr />
              <div className="type">
                <button
                  className="copy-btn"
                  onClick={() => handleCopyToClipboard(searchRef)}
                >
                  Copy to Clipboard
                </button>
              </div>
              <hr />
              <div className="down">
                <pre ref={searchRef}>
                  <code>
                    {`<div class="accordion-wrapper2" id="searchAccordionWrapper2">
  <div class="search-container2">
    <input
      class="search-input2"
      type="text"
      placeholder="Search..."
      id="searchInput2"
    />
    <button class="search-btn2" id="searchBtn2" onclick="handleSearch2()">
      Search
    </button>
    <button
      class="clear-btn2"
      id="clearBtn2"
      onclick="handleClearSearch2()"
    >
      Clear
    </button>
  </div>

  <div class="accordion-container2" id="searchAccordionContainer2"></div>
</div>`}
                  </code>
                </pre>
              </div>
            </div>
            <div className="render">
              <div className="accordian-up">
                <SortaccordianComponent />
              </div>
              <hr />
              <div className="type">
                <button
                  className="copy-btn"
                  onClick={() => handleCopyToClipboard(sortRef)}
                >
                  Copy to Clipboard
                </button>
              </div>
              <hr />
              <div className="down">
                <pre ref={sortRef}>
                  <code>
                    {`<div class="wrapper3">
  <div class="accordion-container3" id="accordionContainer3"></div>
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

export default AccordianDocs;
