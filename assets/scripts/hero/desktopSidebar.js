const desktopMenu = document.querySelector(".desktop-menu");
const dektopMenuContainer = document.querySelector(".desktop-menu-container");

const closeDesktopMenu = () => {
  desktopMenuState = false;
  overlay.style.display = "none";
  desktopMenu.style.display = "none";
};

//sub menu 1
const openDesktopMenu = async (menuName) => {
  desktopMenuState = true;
  overlay.style.display = "block";
  desktopMenu.style.display = "block";

  const data = await getSiderBarData();
  const menuData = data[menuName];

  let menuItems = [];

  for (item of Object.entries(menuData)) {
    if (item[1].length === 0 && menuName != "shop")
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

  dektopMenuContainer.innerHTML = /*html*/ `
        <div class="desktop-menu-items">
            ${menuItems.join("")}
        </div>
    `;
};
