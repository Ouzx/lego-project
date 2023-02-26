const slideWrapper = document.querySelector(".swiper-wrapper");

// if there is no next slide return to the first slide
// translate the slideWrapper to the next slide
// also handle the active class
let slideAmount = 0;
const slideCount = slideWrapper.childElementCount;
const nextSlide = () => {
  const activeSlide = document.querySelector(".swiper-slide-active");
  const nextSlide = activeSlide.nextElementSibling;

  if (!nextSlide) {
    slideAmount = 0;
    slideWrapper.style.transform = "translateX(0)";
    activeSlide.classList.remove("swiper-slide-active");
    slideWrapper.firstElementChild.classList.add("swiper-slide-active");
    return;
  }
  slideAmount += slideWrapper.offsetWidth;
  slideWrapper.style.transform = `translateX(-${slideAmount}px)`;
  activeSlide.classList.remove("swiper-slide-active");
  nextSlide.classList.add("swiper-slide-active");
};

const previousSlide = () => {
  const activeSlide = document.querySelector(".swiper-slide-active");
  const previousSlide = activeSlide.previousElementSibling;

  if (!previousSlide) {
    slideAmount = slideWrapper.offsetWidth * (slideCount - 1);
    slideWrapper.style.transform = `translateX(-${slideAmount}px)`;
    activeSlide.classList.remove("swiper-slide-active");
    slideWrapper.lastElementChild.classList.add("swiper-slide-active");
    return;
  }
  slideAmount -= slideWrapper.offsetWidth;
  slideWrapper.style.transform = `translateX(-${slideAmount}px)`;
  activeSlide.classList.remove("swiper-slide-active");
  previousSlide.classList.add("swiper-slide-active");
};

const resetSlide = () => {
  slideAmount = 0;
  slideWrapper.style.transform = "translateX(0)";
  const activeSlide = document.querySelector(".swiper-slide-active");
  activeSlide.classList.remove("swiper-slide-active");
  slideWrapper.firstElementChild.classList.add("swiper-slide-active");
};

window.addEventListener("resize", resetSlide);
