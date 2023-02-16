const slides = [
  {
    text: "What's on sale now?",
    title: "Shop now",
    link: "#",
  },
  {
    text: "VIPs: Get Double Points 10/02-16/02",
    title: "Shop now",
    link: "#",
  },
  {
    text: "Off-Road Ambulance gift with purchases over £95",
    title: "*Shop now",
    link: "#",
  },
  {
    text: "FREE delivery on orders above £50!",
    title: "*Learn more",
    link: "#",
  },
  {
    text: "FREE delivery on orders above £50!",
    title: "*Learn more",
    link: "#",
  },
];

const headerTopBar = document.querySelector(".header-top");
const sliderContainer = headerTopBar.querySelector(".content");

let currentSlide = 0;
const createSlide = (slide, index) => {
  return `
        <div class="slide" ${index !== currentSlide && "aria-hidden=true"}>
        <span class="slide__text">${slide.text}</span>
        <a href="${slide.link}" class="slide__link">${slide.title}</a>
        </div>
    `;
};

const slidesContent = slides.map(createSlide).join("");
sliderContainer.innerHTML = slidesContent;

const nextButton = headerTopBar.querySelector("#next-slide");
const prevButton = headerTopBar.querySelector("#prev-slide");

const onNextSlide = () => {
  const nextSlide = currentSlide + 1;
  currentSlide = nextSlide === slides.length ? 0 : nextSlide;
  updateSlides();
};

const onPrevSlide = () => {
  const prevSlide = currentSlide - 1;
  currentSlide = prevSlide < 0 ? slides.length - 1 : prevSlide;
  updateSlides();
};

const updateSlides = () => {
  const slides = sliderContainer.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    slide.setAttribute("aria-hidden", index !== currentSlide);
  });
};

nextButton.addEventListener("click", onNextSlide);
prevButton.addEventListener("click", onPrevSlide);
