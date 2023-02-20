// Menu Toggle
const toggleMenu = () => {
  const hamburgerIcon = document.querySelector(".hamburger");
  if (hamburgerIcon.ariaExpanded === "true") {
    hamburgerIcon.ariaExpanded = "false";
  } else {
    hamburgerIcon.ariaExpanded = "true";
  }
  const menu = document.querySelector(".header-menu");
};

// Sticky Header
const nav = document.querySelector("header");

let previousScrollPosition = 0;

const isScrollingDown = () => {
  let scrolledPosition = window.pageYOffset;
  let isScrollDown;

  if (scrolledPosition > previousScrollPosition) {
    isScrollDown = true;
  } else {
    isScrollDown = false;
  }
  previousScrollPosition = scrolledPosition;
  return isScrollDown;
};

const handleNavScroll = () => {
  if (isScrollingDown() && !nav.contains(document.activeElement)) {
    nav.classList.add("scroll-down");
    nav.classList.remove("scroll-up");
  } else {
    nav.classList.add("scroll-up");
    nav.classList.remove("scroll-down");
  }
};

window.addEventListener("scroll", handleNavScroll);

// search toggle
const searchButton = document.querySelector("#search-button");
const searchContainer = document.querySelector("#search-container");

const overlay = document.querySelector(".overlay");

const openSearch = () => {
  if (window.innerWidth > 900) {
    searchButton.style.display = "none";
    searchContainer.style.display = "flex";
    const input = document.querySelector(".search-input");
    input.focus();
    overlay.style.display = "block";
  }
};

const closeSearch = () => {
  if (window.innerWidth > 900) {
    searchButton.style.display = "flex";
    searchContainer.style.display = "none";
    overlay.style.display = "none";
  }
};

document.addEventListener("click", function (event) {
  if (event.target === overlay) {
    closeSearch();
  }
});
