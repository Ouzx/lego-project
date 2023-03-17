const carouselVB = document.querySelector(".carousel-fs");
firstImgVB = carouselVB.querySelectorAll("img")[0];
arrowIconsVB = document.querySelectorAll(".wrapper-fs i");

let isDragStartVB = false,
  isDraggingVB = false,
  prevPageXVB,
  prevScrollLeftVB,
  positionDiffVB;

const showHideIconsVB = () => {
  let scrollWidth = carouselVB.scrollWidth - carouselVB.clientWidth;
  arrowIconsVB[0].style.display = carouselVB.scrollLeft == 0 ? "none" : "block";
  arrowIconsVB[1].style.display =
    carouselVB.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIconsVB.forEach((icon) => {
  let firstImgWidth = firstImgVB.clientWidth + 14;
  icon.addEventListener("click", () => {
    carouselVB.scrollLeft +=
      icon.id == "left-fs" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIconsVB(), 60);
  });
});

const autoSlideVB = () => {
  if (
    carouselVB.scrollLeft ==
    carouselVB.scrollWidth - carouselVB.clientWidth
  ) {
    return;
  }

  positionDiffVB = Math.abs(positionDiffVB);
  let firstImgWidth = firstImgVB.clientWidth + 14;
  let valDifference = firstImgWidth - positionDiffVB;

  if (carouselVB.scrollLeft > prevScrollLeftVB) {
    return (carouselVB.scrollLeft +=
      positionDiffVB > firstImgWidth / 3 ? valDifference : -positionDiffVB);
  }
  carouselVB.scrollLeft -=
    positionDiffVB > firstImgWidth / 3 ? valDifference : -positionDiffVB;
};

const dragStartVB = (e) => {
  isDragStartVB = true;
  prevPageXVB = e.pageX || e.touches[0].pageX;
  prevScrollLeftVB = carouselVB.scrollLeft;
};

const draggingVB = (e) => {
  if (!isDragStartVB) return;
  e.preventDefault();
  isDraggingVB = true;
  carouselVB.classList.add("dragging");
  positionDiffVB = (e.pageX || e.touches[0].pageX) - prevPageXVB;
  carouselVB.scrollLeft = prevScrollLeftVB - positionDiffVB;
  showHideIconsVB();
};

const dragStopVB = () => {
  isDragStartVB = false;
  carouselVB.classList.remove("dragging");

  if (!isDraggingVB) return;
  isDraggingVB = false;
  autoSlideVB();
};

carouselVB.addEventListener("mousedown", dragStartVB);
carouselVB.addEventListener("touchstart", dragStartVB);

carouselVB.addEventListener("mousemove", draggingVB);
carouselVB.addEventListener("touchmove", draggingVB);

carouselVB.addEventListener("mouseup", dragStopVB);
carouselVB.addEventListener("mouseleave", dragStopVB);
carouselVB.addEventListener("touchend", dragStopVB);
