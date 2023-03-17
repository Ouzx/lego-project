const cardsXC = document.querySelectorAll(".rfy_cards-fs");
const carouselXC = document.querySelector(".carousel-fs");

const resizeCardsXC = () => {
  let cardWidth;
  if (window.innerWidth > 1200) {
    cardWidth = carouselXC.clientWidth / 4;
  } else if (window.innerWidth > 900) {
    cardWidth = carouselXC.clientWidth / 3;
  } else if (window.innerWidth > 600) {
    cardWidth = carouselXC.clientWidth / 2;
  } else {
    cardWidth = carouselXC.clientWidth;
  }
  cardsXC.forEach((card) => (card.style.width = cardWidth + "px"));
  // showHideIcons();
};

window.addEventListener("resize", resizeCardsXC);

const equalHeightXC = () => {
  // each card has 2 sections: top (img) and bottom (content)
  // imgs has different height, so we need to change height of bottom section
  // to make all cards have same height
  let maxHeight = 0;
  cardsXC.forEach((card) => {
    let cardHeight = card.clientHeight;
    if (cardHeight > maxHeight) maxHeight = cardHeight;
  });
  cardsXC.forEach((card) => {
    // select bottom section
    let cardContent = card.querySelector(".card-bottom-fs");
    padding =
      parseInt(getComputedStyle(cardContent).paddingTop) +
      parseInt(getComputedStyle(cardContent).paddingBottom);
    cardContent.style.height =
      maxHeight - cardContent.offsetTop - padding + "px";

    cardContent.style.justifySelf = "flex-end";
  });
};

window.addEventListener("load", () => {
  resizeCardsXC();
  equalHeightXC();
});
