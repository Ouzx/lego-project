const desktopMenu = document.querySelector(".desktop-menu");
const overlay = document.querySelector(".overlay");
let desktopMenuState = false;
const openDesktopMenu = () => {
  desktopMenuState = true;
  overlat.style.display = "block";
};

const closeDesktopMenu = () => {
  desktopMenuState = false;
  overlay.style.display = "none";
};
