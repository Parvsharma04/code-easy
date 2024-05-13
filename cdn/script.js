// Navbar
const nav = document.querySelector("nav-container");
const hamburger = document.getElementById("nav-btn");
const hamburgerMenu = document.getElementById("nav-hamburger-menu");
const hamburgerContent = document.getElementsByClassName(
  "nav-hamburger-content"
);

hamburger &&
  hamburger.addEventListener("click", () => {
    toggleMenu();
  });

const toggleMenu = () => {
  hamburgerMenu.classList.toggle("makeVisible");
};

function toggle_light_mode() {
  const originalColor = "rgb(111, 92, 182)";
  const newColor = "rgb(50, 41, 85)";
  // Use "localStorage.getItem" to get the value
  var lightMode = localStorage.getItem("lightMode");

  // Check if the value is "dark" or null (default to dark)
  if (lightMode === "dark" || lightMode === null) {
    localStorage.setItem("lightMode", "light");
    nav.style.backgroundColor = newColor;
    for (let i = 0; i < hamburgerContent.length; i++) {
      hamburgerContent[i].style.backgroundColor = newColor;
      hamburgerContent[i].style.color = "white";
    }
  } else {
    localStorage.setItem("lightMode", "dark");
    nav.style.backgroundColor = originalColor;
    for (let i = 0; i < hamburgerContent.length; i++) {
      hamburgerContent[i].style.backgroundColor = originalColor;
      hamburgerContent[i].style.color = "black";
    }
  }

  // Call a function to apply the light mode (you need to implement this function)
  applyLightMode();
}

// Function to apply the light mode
function applyLightMode() {
  var app = document.getElementsByTagName("HTML")[0];
  var nav = document.querySelector("nav");

  if (localStorage.getItem("lightMode") === "dark") {
    app.setAttribute("light-mode", "dark");
    nav.classList.add("dark-theme");
  } else {
    app.setAttribute("light-mode", "light");
    nav.classList.remove("dark-theme");
  }
}

function reloadPageIfGreaterThan615() {
  if (window.innerWidth > 615) {
    location.reload();
  }
}
window.addEventListener("resize", reloadPageIfGreaterThan615);

// Spinner
const spinner = document.getElementById("multicolorspinner");
let rotationCount = 0;

spinner &&
  spinner.addEventListener("animationiteration", () => {
    // Detect when one full rotation is completed
    rotationCount++;

    // Change color after every 2 rotations (adjust as needed)
    if (rotationCount % 2 === 0) {
      changeColor();
    }
  });

function changeColor() {
  const colors = ["red", "green", "yellow", "blue"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  spinner.style.borderTopColor = randomColor;
}

document.addEventListener("DOMContentLoaded", function () {
  const shapeDropdown = document.getElementById("shapespinnerDropdown");
  const rotation = document.getElementById("rotation");

  shapeDropdown &&
    shapeDropdown.addEventListener("change", function () {
      const selectedShape = shapeDropdown.value;
      rotation.innerHTML = renderSpinners(selectedShape);
      renderSpinners(selectedShape);
    });

  function renderSpinners(shape) {
    switch (shape) {
      case "circle":
        return (
          '<div class="spinner circle"></div>' +
          '<div class="spinner circle"></div>' +
          '<div class="spinner circle"></div>'
        );
      case "square":
        return (
          '<div class="spinner square"></div>' +
          '<div class="spinner square"></div>' +
          '<div class="spinner square"></div>'
        );
      case "triangle":
        return (
          '<div class="spinner triangle"></div>' +
          '<div class="spinner triangle"></div>' +
          '<div class="spinner triangle"></div>'
        );
      case "rectangle":
        return (
          '<div class="spinner rectangle"></div>' +
          '<div class="spinner rectangle"></div>' +
          '<div class="spinner rectangle"></div>'
        );
      default:
        return "";
    }
  }
});
// form
// List of countries
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Austrian Empire*",
  "Azerbaijan",
  "Baden*",
  "Bahamas, The",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Bavaria*",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin (Dahomey)",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Brunswick and Lüneburg*",
  "Bulgaria",
  "Burkina Faso (Upper Volta)",
  "Burma",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands, The",
  "Central African Republic",
  "Central American Federation*",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo Free State, The*",
  "Costa Rica",
  "Cote d’Ivoire (Ivory Coast)",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Czechoslovakia*",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Duchy of Parma, The*",
  "East Germany (German Democratic Republic)*",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Federal Government of Germany (1848-49)*",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Grand Duchy of Tuscany, The*",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Hanover*",
  "Hanseatic Republics*",
  "Hawaii*",
  "Hesse*",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kingdom of Serbia/Yugoslavia*",
  "Kiribati",
  "Korea",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Lew Chew (Loochoo)*",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mecklenburg-Schwerin*",
  "Mecklenburg-Strelitz*",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nassau*",
  "Nauru",
  "Nepal",
  "Netherlands, The",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North German Confederation*",
  "North German Union*",
  "North Macedonia",
  "Norway",
  "Oldenburg*",
  "Oman",
  "Orange Free State*",
  "Pakistan",
  "Palau",
  "Panama",
  "Papal States*",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Piedmont-Sardinia*",
  "Poland",
  "Portugal",
  "Qatar",
  "Republic of Genoa*",
  "Republic of Korea (South Korea)",
  "Republic of the Congo",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Schaumburg-Lippe*",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands, The",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Texas*",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Two Sicilies*",
  "Uganda",
  "Ukraine",
  "Union of Soviet Socialist Republics*",
  "United Arab Emirates, The",
  "United Kingdom, The",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Württemberg*",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// Get the select element
const countrySelect = document.getElementById("country");

// Populate the dropdown with countries
countrySelect &&
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.text = country;
    countrySelect.add(option);
  });

// progress bar
function updateProgressBarDynamic(value) {
  const progressBarDynamic = document.getElementById("progress-bar-dynamic");
  const progressDynamic = document.getElementById("progress-container-dynamic");
  progressBarDynamic.style.width = value + "%";
  if (value < 30) {
    progressBarDynamic.style.backgroundColor = "red";
    progressDynamic.style.borderColor = "red";
  } else if (value >= 30 && value < 60) {
    progressBarDynamic.style.backgroundColor = "orange";
    progressDynamic.style.borderColor = "orange";
  } else if (value >= 60 && value <= 80) {
    progressBarDynamic.style.backgroundColor = "#3d7ae3";
    progressDynamic.style.borderColor = "#3d7ae3";
  } else if (value >= 80 && value <= 90) {
    progressBarDynamic.style.backgroundColor = "blue";
    progressDynamic.style.borderColor = "blue";
  } else {
    progressBarDynamic.style.backgroundColor = "green";
    progressDynamic.style.borderColor = "green";
  }
}

function updateProgressBarStatic(value) {
  const progressBar = document.getElementById("progress-bar-static");
  const progress = document.getElementById("progress-container-static");
  progressBar.style.width = value + "%";
  progressBar.innerText = value + "%";
  if (value < 30) {
    progressBar.style.backgroundColor = "red";
    progress.style.borderColor = "red";
  } else if (value >= 30 && value < 60) {
    progressBar.style.backgroundColor = "orange";
    progress.style.borderColor = "orange";
  } else if (value >= 60 && value <= 80) {
    progressBar.style.backgroundColor = "#3d7ae3";
    progress.style.borderColor = "#3d7ae3";
  } else if (value >= 80 && value <= 90) {
    progressBar.style.backgroundColor = "blue";
    progress.style.borderColor = "blue";
  } else {
    progressBar.style.backgroundColor = "green";
    progress.style.borderColor = "green";
  }
}

function updateProgressBarStaticWithoutPercentage(value) {
  const progressBar = document.getElementById("progress-bar-static");
  const progress = document.getElementById("progress-container-static");
  progressBar.style.width = value + "%";

  if (value < 30) {
    progressBar.style.backgroundColor = "red";
    progress.style.borderColor = "red";
  } else if (value >= 30 && value < 60) {
    progressBar.style.backgroundColor = "orange";
    progress.style.borderColor = "orange";
  } else if (value >= 60 && value <= 80) {
    progressBar.style.backgroundColor = "#3d7ae3";
    progress.style.borderColor = "#3d7ae3";
  } else if (value >= 80 && value <= 90) {
    progressBar.style.backgroundColor = "blue";
    progress.style.borderColor = "blue";
  } else {
    progressBar.style.backgroundColor = "green";
    progress.style.borderColor = "green";
  }
}

// Popover
const popover = document.querySelector(".popover");
const userProfileButton = document.querySelector(".user-profile-button");
const container = document.querySelector(".popover-container");

userProfileButton &&
  userProfileButton.addEventListener("mouseover", () => {
    popover.style.display = "block";
  });
container &&
  container.addEventListener("mouseleave", () => {
    popover.style.display = "none";
  });

// Accordian
// Component 1
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

document.addEventListener("DOMContentLoaded", () => {
  const accordionWrapper = document.getElementById("accordionWrapper");
  const accordionContainer = document.getElementById("accordionContainer");

  data.forEach((item, i) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("accordion-item");
    itemDiv.classList.add(`accordion-item-${i}`); // Unique class for each item
    itemDiv.id = `accordion-item-${i}`; // Unique ID for each item

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("accordion-title");
    titleDiv.classList.add(`accordion-title-${i}`); // Unique class for each title
    titleDiv.innerHTML = `
    <h2>${item.Name}</h2>
    <span>+</span>
  `;
    titleDiv.addEventListener("click", () => toggle(i));

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("accordion-content");
    contentDiv.classList.add(`accordion-content-${i}`); // Unique class for each content
    contentDiv.id = `accordion-content-${i}`; // Unique ID for each content
    contentDiv.textContent = item.Description;

    itemDiv.appendChild(titleDiv);
    itemDiv.appendChild(contentDiv);

    accordionContainer.appendChild(itemDiv);
  });

  accordionWrapper.appendChild(accordionContainer);
});

let selected = null;

function toggle(i) {
  const contentDivs = document.querySelectorAll(`.accordion-content`);
  contentDivs.forEach((content, index) => {
    if (i === index) {
      content.classList.toggle("show");
    } else {
      content.classList.remove("show");
    }
  });

  const titleSpans = document.querySelectorAll(`.accordion-title span`);
  titleSpans.forEach((span, index) => {
    if (i === index) {
      span.textContent = span.textContent === "+" ? "-" : "+";
    } else {
      span.textContent = "+";
    }
  });

  selected = selected === i ? null : i;
}

// Component 2
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

// Component 3
document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      package: "1",
      Name: "Unveiling Our Vision",
      values: ["Apple", "Orange", "Dragon Fruit", "Kiwi"],
    },
    {
      package: "2",
      Name: "Crafting Excellence in Every Service",
      values: ["BMW", "Audi", "Maruti Suzuki", "Kia"],
    },
    {
      package: "3",
      Name: "Powering Progress: Our Technology Arsenal",
      values: ["Potato", "Tomato", "Onion", "Capsicum"],
    },
    {
      package: "4",
      Name: "Insights and Innovation Hub",
      values: ["guitar", "flute", "violin", "piano"],
    },
  ];

  const accordionContainer = document.getElementById("accordionContainer3");

  function renderAccordion() {
    accordionContainer.innerHTML = "";
    data.forEach((item, i) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item3");

      const titleDiv = document.createElement("div");
      titleDiv.classList.add("title3");
      titleDiv.innerHTML = `
        <h2>${item.Name}</h2>
        <span>+</span>
      `;
      titleDiv.addEventListener("click", () => toggleContent(i));

      const contentDiv = document.createElement("div");
      contentDiv.classList.add("content3");

      item.values.forEach((value, index) => {
        const valueDiv = document.createElement("div");
        valueDiv.textContent = value;
        contentDiv.appendChild(valueDiv);
      });

      const sortButton = document.createElement("button");
      sortButton.textContent = "Sort";
      sortButton.classList.add("sort-btn3");
      sortButton.addEventListener("click", () => sortValues(i));

      itemDiv.appendChild(titleDiv);
      itemDiv.appendChild(contentDiv);
      itemDiv.appendChild(sortButton);

      accordionContainer.appendChild(itemDiv);
    });
  }

  function toggleContent(i) {
    const contentDiv =
      accordionContainer.children[i].querySelector(".content3");
    contentDiv.classList.toggle("show");
  }

  function sortValues(i) {
    const sortedValues = [...data[i].values].sort();
    data[i].values = sortedValues;
    renderAccordion();
  }

  renderAccordion();
});
