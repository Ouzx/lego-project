const closeTopBar = () => {
  const topBar = document.querySelector(".header-top");
  console.log(topBar);
  topBar.style.display = "none";
};

const cross = document.querySelector(".cross");
cross.addEventListener("click", closeTopBar);
