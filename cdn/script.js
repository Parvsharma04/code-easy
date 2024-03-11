// basic form
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
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.text = country;
    countrySelect.add(option);
  });
  

//navbar

const nav = document.querySelector('nav')
const hamburger = document.getElementById('btn');
const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerContent = document.getElementsByClassName('hamburger-content')


hamburger.addEventListener("click", ()=> {
    toggleMenu();

})

const toggleMenu = ()=>{
    hamburgerMenu.classList.toggle("makeVisible");
}


function toggle_light_mode() {
    const originalColor = "rgb(111, 92, 182)";
    const newColor = "rgb(50, 41, 85)";
    // Use "localStorage.getItem" to get the value
    var lightMode = localStorage.getItem("lightMode");
    
    // Check if the value is "dark" or null (default to dark)
    if (lightMode === "dark" || lightMode === null) {
      localStorage.setItem("lightMode", "light");
      nav.style.backgroundColor = newColor;
      for(let i=0; i<hamburgerContent.length; i++){
            hamburgerContent[i].style.backgroundColor = newColor;
            hamburgerContent[i].style.color = 'white'
        }
    } 
    else {
      localStorage.setItem("lightMode", "dark");
      nav.style.backgroundColor = originalColor;
      for(let i=0; i<hamburgerContent.length; i++){
            hamburgerContent[i].style.backgroundColor = originalColor;
            hamburgerContent[i].style.color = 'black'
        }
    }
  
    // Call a function to apply the light mode (you need to implement this function)
    applyLightMode();
  }
  
  // Function to apply the light mode
  function applyLightMode() {
    var app = document.getElementsByTagName("HTML")[0];
    var nav = document.querySelector('nav');
  
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
window.addEventListener('resize', reloadPageIfGreaterThan615);


//progress-bar-v1

function updateProgressBar(value) {
    const progressBar = document.getElementById('progress-bar');
    const progress = document.getElementById('progress-container');
    progressBar.style.width = value + '%';
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

//progress-bar-v2

function updateProgressBar(value) {
    const progressBar = document.getElementById('progress-bar');
    const progress = document.getElementById('progress-container');
    progressBar.style.width = value + '%';
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


//progress-bar-v3

function updateProgressBar(value) {
    const progressBar = document.getElementById('progress-bar');
    const progress = document.getElementById('progress-container');
    progressBar.style.width = value + '%';
    progressBar.innerText = value + "%"

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

// spinner 2

const spinner = document.getElementById('spinner2');
let rotationCount = 0;

spinner.addEventListener('animationiteration', () => {
  // Detect when one full rotation is completed
  rotationCount++;

  // Change color after every 2 rotations (adjust as needed)
  if (rotationCount % 2 === 0) {
    changeColor();
  }
});

function changeColor() {
  const colors = ['red', 'green', 'yellow', 'blue'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  spinner.style.borderTopColor = randomColor;
}


//spinner 3

document.addEventListener('DOMContentLoaded', function () {
  const shapeDropdown = document.getElementById('shapeDropdown');
  const rotation = document.getElementById('rotation')

  shapeDropdown.addEventListener('change', function () {
    const selectedShape = shapeDropdown.value;
  rotation.innerHTML = renderSpinners(selectedShape);
    renderSpinners(selectedShape);
  });

  function renderSpinners(shape) {
    switch (shape) {
      case 'circle':
        return (
          '<div class="spinner circle"></div>' +
          '<div class="spinner circle"></div>' +
          '<div class="spinner circle"></div>'
        );
      case 'square':
        return (
          '<div class="spinner square"></div>' +
          '<div class="spinner square"></div>' +
          '<div class="spinner square"></div>'
        );
      case 'triangle':
        return (
          '<div class="spinner triangle"></div>' +
          '<div class="spinner triangle"></div>' +
          '<div class="spinner triangle"></div>'
        );
      case 'rectangle':
        return (
          '<div class="spinner rectangle"></div>' +
          '<div class="spinner rectangle"></div>' +
          '<div class="spinner rectangle"></div>'
        );
      default:
        return '';
    }
  }
});
