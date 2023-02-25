const desktopMenuContainer = document.querySelector(".desktop-menu-container");
const desktopMenuItems = document.querySelector(".desktop-menu-items");
let desktopSubMenu1State = false;

const closeDesktopMenu = () => {
  overlay.style.display = "none";
  desktopMenuContainer.style.display = "none";
  desktopSubMenu1State = false;
};

//desktop sub menu 1
const openDesktopMenu = async (menuName) => {
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

  desktopSubMenu1State = true;
};

// handle desktop menu window resize
// if window size is greater than 1600px, add left padding to container

const handleDesktopMenuResize = () => {
  const startPadding = 8.5 * 16;
  const width = window.innerWidth;
  const diff = width - 1600;
  if (diff > 0)
    desktopMenuContainer.style.paddingLeft = diff / 2 + startPadding + "px";
};

window.addEventListener("resize", handleDesktopMenuResize);
