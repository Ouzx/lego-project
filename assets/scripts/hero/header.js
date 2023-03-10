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
  if (desktopMenuState) return;
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
let desktopSearchState = false;
const openSearch = () => {
  searchButton.style.display = "none";
  searchContainer.style.display = "flex";
  const input = document.querySelector(".search-input");
  input.focus();
  overlay.style.display = "block";
  desktopSearchState = true;
};

const closeSearch = () => {
  if (!desktopSearchState) return;
  searchButton.style.display = "flex";
  searchContainer.style.display = "none";
  overlay.style.display = "none";
  desktopSearchState = false;
};

// cart update
let productsInCart = 2;
const cartContent = document.querySelector(".cart-content");
const cartAtTheSideBar = document.querySelector("#cart-content");
// cart paranthese
const cartParanthese = () => {
  if (window.innerWidth > 900) {
    cartContent.innerHTML = `(${productsInCart})`;
  } else {
    cartContent.innerHTML = productsInCart;
  }
  cartAtTheSideBar.innerHTML = `(${productsInCart})`;
};

cartParanthese();
window.addEventListener("resize", cartParanthese);
