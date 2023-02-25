const desktopMenuContainer = document.querySelector(".desktop-menu-container");
const desktopMenuItems = document.querySelector(".desktop-menu-items");
let desktopMenuState = false;

const closeDesktopMenu = () => {
  if (!desktopMenuState) return;
  overlay.style.display = "none";
  desktopMenuContainer.style.display = "none";
  desktopMenuState = false;
};

//desktop sub menu 1
const openDesktopMenu = async (menuName) => {
  handleDesktopMenuResize();
  overlay.style.display = "flex";
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

const handleDesktopMenuResize = () => {
  const startPadding = 8.5 * 16;
  const width = window.innerWidth;
  const diff = width - 1600;
  if (diff > 0)
    desktopMenuContainer.style.paddingLeft = diff / 2 + startPadding + "px";
};

window.addEventListener("resize", handleDesktopMenuResize);
