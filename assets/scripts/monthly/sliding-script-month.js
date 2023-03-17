const carouselASD = document.querySelector(".carousel-month");
firstImgASD = carouselASD.querySelectorAll("img")[0];
arrowIconsASD = document.querySelectorAll(".wrapper-month i");

let isDragStartASD = false,
  isDraggingASD = false,
  prevPageXASD,
  prevScrollLeftASD,
  positionDiffASD;

const showHideIconsASD = () => {
  let scrollWidth = carouselASD.scrollWidth - carouselASD.clientWidth;
  arrowIconsASD[0].style.display =
    carouselASD.scrollLeft == 0 ? "none" : "block";
  arrowIconsASD[1].style.display =
    carouselASD.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIconsASD.forEach((icon) => {
  let firstImgWidth = firstImgASD.clientWidth + 14;
  icon.addEventListener("click", () => {
    carouselASD.scrollLeft +=
      icon.id == "left-month" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIconsASD(), 60);
  });
});

const autoSlideASD = () => {
  if (
    carouselASD.scrollLeft ==
    carouselASD.scrollWidth - carouselASD.clientWidth
  ) {
    return;
  }

  positionDiffASD = Math.abs(positionDiffASD);
  let firstImgWidth = firstImgASD.clientWidth + 14;
  let valDifference = firstImgWidth - positionDiffASD;

  if (carouselASD.scrollLeft > prevScrollLeftASD) {
    return (carouselASD.scrollLeft +=
      positionDiffASD > firstImgWidth / 3 ? valDifference : -positionDiffASD);
  }
  carouselASD.scrollLeft -=
    positionDiffASD > firstImgWidth / 3 ? valDifference : -positionDiffASD;
};

const dragStartASD = (e) => {
  isDragStartASD = true;
  prevPageXASD = e.pageX || e.touches[0].pageX;
  prevScrollLeftASD = carouselASD.scrollLeft;
};

const draggingASD = (e) => {
  if (!isDragStartASD) return;
  e.preventDefault();
  isDraggingASD = true;
  carouselASD.classList.add("dragging");
  positionDiffASD = (e.pageX || e.touches[0].pageX) - prevPageXASD;
  carouselASD.scrollLeft = prevScrollLeftASD - positionDiffASD;
  showHideIconsASD();
};

const dragStopASD = () => {
  isDragStartASD = false;
  carouselASD.classList.remove("dragging");

  if (!isDraggingASD) return;
  isDraggingASD = false;
  autoSlideASD();
};

carouselASD.addEventListener("mousedown", dragStartASD);
carouselASD.addEventListener("touchstart", dragStartASD);

carouselASD.addEventListener("mousemove", draggingASD);
carouselASD.addEventListener("touchmove", draggingASD);

carouselASD.addEventListener("mouseup", dragStopASD);
carouselASD.addEventListener("mouseleave", dragStopASD);
carouselASD.addEventListener("touchend", dragStopASD);
