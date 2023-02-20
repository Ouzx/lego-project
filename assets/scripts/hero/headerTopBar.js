const closeTopBar = () => {
  const topBar = document.querySelector(".header-top");
  console.log(topBar);
  topBar.style.display = "none";
};

const cross = document.querySelector(".cross");
cross.addEventListener("click", closeTopBar);

// cart update
let productsInCart = 2;
const cartContent = document.querySelector(".cart-content");

// cart paranthese
const cartParanthese = () => {
  if (window.innerWidth > 900) {
    cartContent.innerHTML = `(${productsInCart})`;
  } else {
    cartContent.innerHTML = productsInCart;
  }
};

cartParanthese();
window.addEventListener("resize", cartParanthese);
