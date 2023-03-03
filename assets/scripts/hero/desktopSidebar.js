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
let desktopSubMenu2Items = [];

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
  desktopSubMenu2Items = [];
  isTable = false;
  menuData.map((item, i) => {
    if (item === menuData[menuData.length - 1] && parentName === "shop")
      desktopSubMenuTitle.innerHTML = item;
    else
      desktopSubMenu2Items.push(/*html*/ `
      <button class="desktop-sub-menu-item"> ${item} </button>
    `);
  });
  if (parentName !== "shop") desktopSubMenuTitle.innerHTML = "";

  // desktopSubMenuContainer.innerHTML = `${menuItems.join("")}`;
  orderDesktopSubMenu();
  desktopMenuWrapper.ariaExpanded = true;
};
let isTable = false;
const orderDesktopSubMenu = () => {
  const width = window.innerWidth;

  if (width < 1200) {
    if (!isTable && !desktopSubMenuContainer.innerHTML === "") return;
    desktopSubMenuContainer.innerHTML = `${desktopSubMenu2Items.join("")}`;
    isTable = false;
    return;
  }
  if (isTable) return;
  isTable = true;

  const columnCount = 3;
  const itemCountPerColumn = 16;

  let column = 0;
  let item = 0;

  let column1 = "";
  let column2 = "";
  let column3 = "";

  for (let i = 0; i < desktopSubMenu2Items.length; i++) {
    if (item === itemCountPerColumn) {
      item = 0;
      column++;
    }

    if (column === 0) {
      column1 += desktopSubMenu2Items[i];
    } else if (column === 1) {
      column2 += desktopSubMenu2Items[i];
    } else if (column === 2) {
      column3 += desktopSubMenu2Items[i];
    }

    item++;
  }

  const table = /*html*/ `
    <div class="desktop-menu-table">
      <div class="desktop-menu-column ">${column1}</div>
      <div class="desktop-menu-column ">${column2}</div>
      <div class="desktop-menu-column ">${column3}</div>
    </div>
  `;
  desktopSubMenuContainer.innerHTML = table;
};

window.addEventListener("resize", orderDesktopSubMenu);

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
