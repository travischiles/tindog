let whiteSections = document.querySelectorAll(".white-section");
let pinkSections = document.querySelectorAll(".colored-section-pink");
let orangeSections = document.querySelectorAll(".colored-section-orange");
let cards = document.querySelectorAll(".card");
const modeToggler = document.querySelector("#mode-toggler");
const darkOutlineButton = document.querySelector(".btn-outline-dark");
const paragraphText = document.getElementsByTagName("p");
/* Function for selecting a group of sections within the page and toggling a specified class */

function toggleElements(elementVar, newState) {
  for (let i = 0; i < elementVar.length; i++) {
    elementVar[i].classList.toggle(newState);
  }
}

function toggleDarkMode() {
  if (modeToggler.classList.contains("active")) {
    modeToggler.textContent = "Dark Mode";
  } else {
    modeToggler.textContent = "Light Mode";
  }
  toggleElements(whiteSections, "darkmode-section-lighter");
  toggleElements(pinkSections, "darkmode-section-darker");
  toggleElements(orangeSections, "darkmode-section-darker");
  toggleElements(cards, "darkmode-card");
  toggleElements(paragraphText, "dark-mode");
  darkOutlineButton.classList.toggle("btn-outline-light");
  darkOutlineButton.classList.toggle("btn-outline-dark");
}

modeToggler.addEventListener("click", toggleDarkMode);
