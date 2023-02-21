// Menu toggle
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");

const toggleMenu = () => {
  if (menu.ariaExpanded === "true") {
    closeMenu();
  } else {
    openMenu();
  }
};

const openMenu = () => {
  menu.ariaExpanded = "true";
  overlay.style.display = "block";
};

const closeMenu = () => {
  menu.ariaExpanded = "false";
  overlay.style.display = "none";
};
