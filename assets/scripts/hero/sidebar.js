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

// sub menu
// keep content to add back to menu
const sideMenuContent = document.querySelector(".menu-content").innerHTML;
const menugoBackButtonIcon = document.querySelector(".menu-goback-icon");
let sideMenu = document.querySelector(".menu-content");

let subMenu1State = false;
const openSubMenu1 = async (menuName) => {
  menugoBackButtonIcon.style.display = "block";
  // sideMenu.innerHTML = /*html*/ `
  //   <div class="menu-items sub-menu">
  //     <a href="x" class="menu-item sub sub-title"> ${menuName} </a>
  //     <a href="#" class="menu-item sub">Sub Menu Item 1</a>

  //     <a href="#" class="menu-item sub">Sub Menu Item 2</a>

  //     <a href="#" class="menu-item sub">Sub Menu Item 3</a>
  //   </div>
  // `;

  const data = await getSiderBarData();
  const menuData = data[menuName];
  console.log(menuData);
  let menuItems = [];

  for (item of Object.keys(menuData)) {
    menuItems.push(/*html*/ `
      <a class="menu-item sub">${item}</a>
    `);
  }

  sideMenu.innerHTML = /*html*/ `
    <div class="menu-items sub-menu">
      <div class="menu-item sub sub-title"> ${menuName} </div>
      ${menuItems.join("")}
    </div>
  `;

  subMenu1State = true;
};

const closeSubMenu = () => {
  if (!subMenu1State) return;
  sideMenu.innerHTML = sideMenuContent;
  subMenu1State = false;
  menugoBackButtonIcon.style.display = "none";
};

const getSiderBarData = async () => {
  return fetch("assets/data/sidebar.json")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
