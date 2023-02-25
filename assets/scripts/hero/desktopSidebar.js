// menu and sub menu 1
const desktopMenuContainer = document.querySelector(".desktop-menu-container");
const desktopMenuItems = document.querySelector(".desktop-menu-items");
let desktopMenuState = false;

// sub menu 2
const desktopSubMenuTitle = document.querySelector(
  ".desktop-inner-menu-items > p"
);

const closeDesktopMenu = () => {
  if (!desktopMenuState) return;
  overlay.style.display = "none";
  desktopMenuContainer.style.display = "none";
  desktopMenuState = false;
  menuButtonStateHandler();
};

//desktop sub menu 1
const openDesktopMenu = async (menuName) => {
  handleDesktopMenuResize();

  menuButtonStateHandler(menuName);

  overlay.style.display = "block";
  desktopMenuContainer.style.display = "block";

  const data = await getSiderBarData();
  const menuData = data[menuName];

  let menuItems = [];

  for (item of Object.entries(menuData)) {
    if (item[1].length === 0)
      menuItems.push(/*html*/ `
        <button class="desktop-menu-item" > ${item[0]} </button>
        `);
    else {
      menuItems.push(/*html*/ `
        <button class="desktop-menu-item" onclick="openSubMenu2('${item[0]}', '${menuName}')" > 
            ${item[0]} 
            <img src="assets/icons/hero/next.svg" width="8" />
        </button>
        `);
    }
  }

  desktopMenuItems.innerHTML = /*html*/ `${menuItems.join("")}`;

  desktopMenuState = true;
};

// extra left padding calculation for desktop menu
const handleDesktopMenuResize = () => {
  const startPadding = 8.5 * 16;
  const width = window.innerWidth;
  const diff = width - 1600;
  if (diff > 0)
    desktopMenuContainer.style.paddingLeft = diff / 2 + startPadding + "px";
};

window.addEventListener("resize", handleDesktopMenuResize);

const desktopMenuShopButton = document.querySelector("#shop");
const desktopMenuDiscoverButton = document.querySelector("#discover");
const desktopMenuHelpButton = document.querySelector("#help");

const menuButtonStateHandler = (menuName = "") => {
  if (menuName === "shop") {
    desktopMenuShopButton.style.borderColor = "#000";
    desktopMenuDiscoverButton.style.borderColor = "transparent";
    desktopMenuHelpButton.style.borderColor = "transparent";
  } else if (menuName === "discover") {
    desktopMenuShopButton.style.borderColor = "transparent";
    desktopMenuDiscoverButton.style.borderColor = "#000";
    desktopMenuHelpButton.style.borderColor = "transparent";
  } else if (menuName === "help") {
    desktopMenuShopButton.style.borderColor = "transparent";
    desktopMenuDiscoverButton.style.borderColor = "transparent";
    desktopMenuHelpButton.style.borderColor = "#000";
  } else {
    desktopMenuShopButton.style.borderColor = "transparent";
    desktopMenuDiscoverButton.style.borderColor = "transparent";
    desktopMenuHelpButton.style.borderColor = "transparent";
  }
};
