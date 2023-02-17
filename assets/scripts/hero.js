// TODO: Ask tutor to .header-top__cross double underline?
const closeTopBar = () => {
  const topBar = document.querySelector(".header-top");
  console.log(topBar);
  topBar.style.display = "none";
};

const cross = document.querySelector(".cross");
cross.addEventListener("click", closeTopBar);

const toggleMenu = () => {
  const hamburgerIcon = document.querySelector(".hamburger");
  if (hamburgerIcon.ariaExpanded === "true") {
    hamburgerIcon.ariaExpanded = "false";
  } else {
    hamburgerIcon.ariaExpanded = "true";
  }
  const menu = document.querySelector(".header-menu");
};
