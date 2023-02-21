// Menu toggle
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
const menuContent = document.querySelector(".menu-content");
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
  menuContent.style.display = "block";
};

const closeMenu = () => {
  menu.ariaExpanded = "false";
  overlay.style.display = "none";
  menuContent.style.display = "none";
};
