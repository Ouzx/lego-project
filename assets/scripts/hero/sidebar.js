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
  mobileMenuState = true;
};

const closeMenu = () => {
  if (!mobileMenuState) return;
  closeSubMenu();
  menu.ariaExpanded = "false";
  overlay.style.display = "none";
  menuContent.style.display = "none";
};

// sub menu
// keep content to add back to menu
const sideMenuContent = document.querySelector(".menu-content").innerHTML;
const menugoBackButtonIcon = document.querySelector(".menu-goback-icon");
let sideMenu = document.querySelector(".menu-content");

let mobileMenuState = false;
const openSubMenu1 = async (menuName) => {
  menugoBackButtonIcon.style.display = "block";

  const data = await getSiderBarData();
  const menuData = data[menuName];

  let menuItems = [];

  for (item of Object.entries(menuData)) {
    // print key of the item

    if (item[1].length === 0)
      menuItems.push(/*html*/ `
      <button class="menu-item sub" > ${item[0]} </button>
    `);
    else {
      menuItems.push(/*html*/ `
      <button class="menu-item sub" onclick="openSubMenu2('${item[0]}', '${menuName}')" > 
        ${item[0]} 
        <img src="assets/icons/hero/next.svg" width="10" />
      </button>
    `);
    }
  }

  sideMenu.innerHTML = /*html*/ `
    <div class="menu-items sub-menu">
      <div class="menu-item sub sub-title"> ${menuName} </div>
      ${menuItems.join("")}
    </div>
  `;

  mobileMenuState = true;
};

const closeSubMenu = () => {
  if (!mobileMenuState) return;
  sideMenu.innerHTML = sideMenuContent;
  mobileMenuState = false;
  menugoBackButtonIcon.style.display = "none";
};

// sub menu 2
const openSubMenu2 = async (menuName, parentName) => {
  const data = await getSiderBarData();
  const menuData = data[parentName][menuName];

  let menuItems = [];

  menuData.map((item, i) => {
    if (item === menuData[menuData.length - 1] && parentName === "shop")
      menuItems.push(/*html*/ `
      <div class="menu-shop-item-container"> 
        <button class="menu-item sub menu-shop-item" > 
          ${item} 
          <div class="see-all-items-shop">
            <img src="assets/icons/hero/next.svg" width="7" />
          </div>
        </button>
      </div>`);
    else
      menuItems.push(/*html*/ `
      <button class="menu-item sub"> ${item} </button>
    `);
  });

  sideMenu.innerHTML = /*html*/ `
    <div class="menu-items sub-menu">
      <button class="menu-item" onclick="openSubMenu1('${parentName}')">
        <div class="icon-item" style="gap: 0.6rem; font-weight: 400;"> 
          <img
            src="assets/icons/hero/next.svg"
            style="transform: rotateZ(180deg)"
            width="10"
            class="menu-goback-icon"
          />
          ${parentName.toUpperCase()}
        </div>
      </button>
      <div class="menu-item sub sub-title"> ${menuName} </div>
      ${menuItems.join("")}
    </>
  `;
};

const getSiderBarData = async () => {
  return fetch("assets/data/sidebar.json")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
