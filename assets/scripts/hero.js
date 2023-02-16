const slidesData = [
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
];

const headerTopBar = document.querySelector(".header-top");
const sliderContainer = headerTopBar.querySelector(".content");

let currentSlide = 0;
const createSlide = (slide) => {
  return `
        <div class="slide">
        <span class="slide__text">${slide.text}</span>
        <a href="${slide.link}" class="slide__link">${slide.title}</a>
        </div>
    `;
};

const slidesContent = slidesData.map(createSlide).join("");
sliderContainer.innerHTML = slidesContent;

const slides = sliderContainer.querySelectorAll(".slide");
const nextButton = headerTopBar.querySelector("#next-slide");
const prevButton = headerTopBar.querySelector("#prev-slide");

const width = slides[0].offsetWidth;

// change sliders position to start from the first slide
sliderContainer.style.left = `${width * 1.5}px`;

const onNextSlide = () => {
  const nextSlide = currentSlide + 1;
  currentSlide = nextSlide >= slides.length ? 0 : nextSlide;
  sliderContainer.style.transform = `translateX(-${width * currentSlide}px)`;
};

const onPrevSlide = () => {
  const nextSlide = currentSlide - 1;
  currentSlide = nextSlide < 0 ? slides.length - 1 : nextSlide;
  sliderContainer.style.transform = `translateX(-${width * currentSlide}px)`;
};

nextButton.addEventListener("click", onNextSlide);
prevButton.addEventListener("click", onPrevSlide);
