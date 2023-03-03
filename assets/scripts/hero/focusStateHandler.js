/**
 * States
 *
 * Mobile Side Menu On/Off
 * Mobile Side Menu Sub Menu On/Off -
 * Mobile Search On/Off
 *
 * Desktop Side Menu On/Off
 * Desktop Side Menu Sub Menu On/Off -
 * Desktop Search On/Off
 */

const stateHandler = () => {
  const width = window.innerWidth;

  if (width < 600) {
    closeSearch(); // desktop search
  } else if (width >= 600 && width < 900) {
    mobileSearchState = false; // TODO: mobile search

    closeDesktopMenu(); // desktop sidebar
  } else if (width >= 900) {
    closeMenu(); // mobile sidebar
  }
};

const overlayHandler = (event) => {
  if (event.target === overlay) {
    if (mobileMenuState) closeMenu();
    // if (mobileSearchState) closeMobileSearch();
    if (desktopMenuState) closeDesktopMenu();
    if (desktopSearchState) closeSearch();
  }
};

window.addEventListener("resize", stateHandler);
window.addEventListener("click", overlayHandler);
