// Navbar
const nav = document.querySelector("nav-container");
const hamburger = document.getElementById("nav-btn");
const hamburgerMenu = document.getElementById("nav-hamburger-menu");
const hamburgerContent = document.getElementsByClassName(
  "nav-hamburger-content"
);

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
