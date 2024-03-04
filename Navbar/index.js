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