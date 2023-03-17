const carouselHJ = document.querySelector(".carousel-mps");
arrofirstImgHJ = carouselHJ.querySelectorAll("img")[0];
aarrowIconsHJ = document.querySelectorAll(".wrapper-mps i");

let isDragStartHJ = false,
  isDraggingHJ = false,
  prevPageXHJ,
  prevScrollLeftHJ,
  positionDiffHJ;

const showHideIconsHJ = () => {
  let scrollWidth = carouselHJ.scrollWidth - carouselHJ.clientWidth;
  aarrowIconsHJ[0].style.display =
    carouselHJ.scrollLeft == 0 ? "none" : "block";
  aarrowIconsHJ[1].style.display =
    carouselHJ.scrollLeft == scrollWidth ? "none" : "block";
};

aarrowIconsHJ.forEach((icon) => {
  let firstImgWidth = arrofirstImgHJ.clientWidth + 14;
  icon.addEventListener("click", () => {
    carouselHJ.scrollLeft +=
      icon.id == "left-mps" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIconsHJ(), 60);
  });
});

const autoSlideHJ = () => {
  if (
    carouselHJ.scrollLeft ==
    carouselHJ.scrollWidth - carouselHJ.clientWidth
  ) {
    return;
  }

  positionDiffHJ = Math.abs(positionDiffHJ);
  let firstImgWidth = arrofirstImgHJ.clientWidth + 14;
  let valDifference = firstImgWidth - positionDiffHJ;

  if (carouselHJ.scrollLeft > prevScrollLeftHJ) {
    return (carouselHJ.scrollLeft +=
      positionDiffHJ > firstImgWidth / 3 ? valDifference : -positionDiffHJ);
  }
  carouselHJ.scrollLeft -=
    positionDiffHJ > firstImgWidth / 3 ? valDifference : -positionDiffHJ;
};

const dragStartHJ = (e) => {
  isDragStartHJ = true;
  prevPageXHJ = e.pageX || e.touches[0].pageX;
  prevScrollLeftHJ = carouselHJ.scrollLeft;
};

const draggingHJ = (e) => {
  if (!isDragStartHJ) return;
  e.preventDefault();
  isDraggingHJ = true;
  carouselHJ.classList.add("dragging");
  positionDiffHJ = (e.pageX || e.touches[0].pageX) - prevPageXHJ;
  carouselHJ.scrollLeft = prevScrollLeftHJ - positionDiffHJ;
  showHideIconsHJ();
};

const dragStopHJ = () => {
  isDragStartHJ = false;
  carouselHJ.classList.remove("dragging");

  if (!isDraggingHJ) return;
  isDraggingHJ = false;
  autoSlideHJ();
};

carouselHJ.addEventListener("mousedown", dragStartHJ);
carouselHJ.addEventListener("touchstart", dragStartHJ);

carouselHJ.addEventListener("mousemove", draggingHJ);
carouselHJ.addEventListener("touchmove", draggingHJ);

carouselHJ.addEventListener("mouseup", dragStopHJ);
carouselHJ.addEventListener("mouseleave", dragStopHJ);
carouselHJ.addEventListener("touchend", dragStopHJ);
