document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      package: "1",
      Name: "Unveiling Our Vision",
      Description:
        "Welcome to our digital hub! Here, we share our passion for [Your Industry/Field]. Explore our site to discover the innovation, creativity, and dedication that drive our projects and initiatives.",
    },
    {
      package: "2",
      Name: "Crafting Excellence in Every Service",
      Description:
        "Discover the array of services we offer, tailored to meet the diverse needs of our clients. Whether its [Service 1], [Service 2], or [Service 3], we are committed to delivering excellence at every step.",
    },
    {
      package: "3",
      Name: "Powering Progress: Our Technology Arsenal",
      Description:
        "Explore the cutting-edge technologies that fuel our operations. From [Technology 1] to [Technology 2], we leverage the latest tools to ensure efficiency, security, and unmatched performance.",
    },
    {
      package: "4",
      Name: "Insights and Innovation Hub",
      Description:
        "Dive into our blog for the latest industry trends, insider perspectives, and updates on our projects. Stay informed, inspired, and connected to the pulse of innovation in [Your Industry/Field].",
    },
  ];

  const accordionWrapper = document.getElementById("searchAccordionWrapper2");
  const accordionContainer = document.getElementById(
    "searchAccordionContainer2"
  );
  const searchInput = document.getElementById("searchInput2");

  let selected = null;
  let filteredData = data;

  function renderAccordion() {
    accordionContainer.innerHTML = "";
    filteredData.forEach((item, i) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item2");
      itemDiv.classList.add(`item2-${i}`); // Unique class for each item
      itemDiv.id = `accordion-item2-${i}`; // Unique ID for each item

      const titleDiv = document.createElement("div");
      titleDiv.classList.add("title2");
      titleDiv.classList.add(`title2-${i}`); // Unique class for each title
      titleDiv.innerHTML = `
        <h2>${item.Name}</h2>
        <span>${selected === i ? "-" : "+"}</span>
      `;
      titleDiv.addEventListener("click", () => toggle2(i));

      const contentDiv = document.createElement("div");
      contentDiv.classList.add("content2");
      contentDiv.classList.add(`content2-${i}`); // Unique class for each content
      contentDiv.id = `accordion-content2-${i}`; // Unique ID for each content
      contentDiv.textContent = item.Description;

      if (selected === i) {
        contentDiv.classList.add("show");
      }

      itemDiv.appendChild(titleDiv);
      itemDiv.appendChild(contentDiv);

      accordionContainer.appendChild(itemDiv);
    });
  }

  function toggle2(i) {
    selected = selected === i ? null : i;
    renderAccordion();
  }

  function handleSearch2() {
    const searchTerm = searchInput.value.toLowerCase();
    filteredData = data.filter((item) =>
      item.Name.toLowerCase().includes(searchTerm)
    );
    renderAccordion();
  }

  function handleClearSearch2() {
    searchInput.value = "";
    filteredData = data;
    selected = null;
    renderAccordion();
  }

  // Event listeners for search buttons
  document
    .getElementById("searchBtn2")
    .addEventListener("click", handleSearch2);
  document
    .getElementById("clearBtn2")
    .addEventListener("click", handleClearSearch2);

  renderAccordion();
});
