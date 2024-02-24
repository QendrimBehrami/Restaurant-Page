import "./style.css";

// Import page modules
import home from "./home";
import menu from "./menu";
import about from "./about";

// main.js or another relevant JS file
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub);
dom.watch();

// Load Nav Buttons
let homeButton = document.querySelector("#homeButton");
let menuButton = document.querySelector("#menuButton");
let aboutButton = document.querySelector("#aboutButton");
let currentButton = homeButton;

let content = document.querySelector("#content");

// Let homeButton load the home page
homeButton.addEventListener("click", () => {
  content.innerHTML = "";
  currentButton.classList.remove("active");
  currentButton = homeButton;
  homeButton.classList.add("active");
  content.appendChild(home);
});

// Let menuButton load the menu page
menuButton.addEventListener("click", () => {
  content.innerHTML = "";
  currentButton.classList.remove("active");
  currentButton = menuButton;
  menuButton.classList.add("active");
  content.appendChild(menu);
});

// Let aboutButton load the about page
aboutButton.addEventListener("click", () => {
  content.innerHTML = "";
  currentButton.classList.remove("active");
  currentButton = aboutButton;
  aboutButton.classList.add("active");
  content.appendChild(about);
});

// Load the home page by default
document.addEventListener("DOMContentLoaded", () => {
  currentButton.classList.add("active");
  setTimeout(() => {
    content.classList.add("fade-in");
    currentButton.click();
  }, 700);
});
