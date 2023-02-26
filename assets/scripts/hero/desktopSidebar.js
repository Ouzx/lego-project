const desktopMenuWrapper = document.querySelector(".desktop-menu-wrapper");
const desktopMenuSeperator = document.querySelector(".desktop-menu-seperator");
// menu and sub menu 1
const desktopMenuContainer = document.querySelector(".desktop-menu-container");
const desktopMenuItems = document.querySelector(".desktop-menu-items");
let desktopMenuState = false;

// sub menu 2
const desktopSubMenuTitle = document.querySelector(
  ".desktop-inner-menu-items > p"
);
const desktopSubMenuContainer = document.querySelector(
  ".desktop-inner-menu-items-container"
);

const closeDesktopMenu = () => {
  if (!desktopMenuState) return;
  overlay.style.display = "none";
  desktopMenuContainer.style.display = "none";
  desktopMenuState = false;
  menuButtonStateHandler();
};

//desktop sub menu 1
let lastMenu = null;
const openDesktopMenu = async (menuName) => {
  if (lastMenu != menuName) closeDesktopSubMenu();
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
        <button class="desktop-menu-item" onclick="clearSubMenuFocus()" ><span>${item[0]}</span>  </button>
        `);
    else {
      menuItems.push(/*html*/ `
        <button class="desktop-menu-item" onclick="openDesktopSubMenu('${item[0]}', '${menuName}', this)" > 
            <span>${item[0]}</span> 
            <img src="assets/icons/hero/next.svg" width="8" />
        </button>
        `);
    }
  }

  desktopMenuItems.innerHTML = /*html*/ `${menuItems.join("")}`;

  desktopMenuState = true;
  lastMenu = menuName;
};

// desktop sub menu 2
let subMenuRef = null;
const openDesktopSubMenu = async (menuName, parentName, button) => {
  if (!button) return;
  if (button === subMenuRef) {
    clearSubMenuFocus();
    return;
  } else {
    if (subMenuRef) {
      subMenuRef.classList.remove("desktop-menu-item-active");
    }
  }

  subMenuRef = button;
  subMenuRef.classList.add("desktop-menu-item-active");
  desktopMenuSeperator.style.display = "block";

  const data = await getSiderBarData();

  const menuData = data[parentName][menuName];

  let menuItems = [];

  menuData.map((item, i) => {
    if (item === menuData[menuData.length - 1] && parentName === "shop")
      desktopSubMenuTitle.innerHTML = item;
    else
      menuItems.push(/*html*/ `
      <button class="desktop-sub-menu-item"> ${item} </button>
    `);
  });
  if (parentName !== "shop") desktopSubMenuTitle.innerHTML = "";

  desktopSubMenuContainer.innerHTML = `${menuItems.join("")}`;

  desktopMenuWrapper.ariaExpanded = true;
};

const closeDesktopSubMenu = () => {
  desktopSubMenuContainer.innerHTML = "";
  desktopSubMenuTitle.innerHTML = "";
  desktopMenuWrapper.ariaExpanded = false;
  desktopMenuSeperator.style.display = "none";
};

const clearSubMenuFocus = () => {
  closeDesktopSubMenu();
  if (!subMenuRef) return;
  if (!subMenuRef.classList.contains("desktop-menu-item-active")) return;
  subMenuRef.classList.remove("desktop-menu-item-active");
  subMenuRef = null;
};

// extra left padding calculation for desktop menu
const handleDesktopMenuResize = () => {
  const startPadding = 8.5;
  const width = window.innerWidth;
  if (width < 1600) {
    desktopMenuContainer.style.paddingLeft = startPadding + "rem";
    return;
  }
  const diff = width - 1600;
  const diffAsRem = diff / 32; // 16 comes from rem, 2 comes from formula
  // diff / 2 + startPadding + "px"
  if (diff > 0)
    desktopMenuContainer.style.paddingLeft = diffAsRem + startPadding + "rem";
};

window.addEventListener("resize", handleDesktopMenuResize);

// focusing on the menu item
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
