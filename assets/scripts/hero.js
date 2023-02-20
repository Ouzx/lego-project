// TODO: Ask tutor to .header-top__cross double underline?
const closeTopBar = () => {
  const topBar = document.querySelector(".header-top");
  console.log(topBar);
  topBar.style.display = "none";
};

// Menu Toggle
const cross = document.querySelector(".cross");
cross.addEventListener("click", closeTopBar);

const toggleMenu = () => {
  const hamburgerIcon = document.querySelector(".hamburger");
  if (hamburgerIcon.ariaExpanded === "true") {
    hamburgerIcon.ariaExpanded = "false";
  } else {
    hamburgerIcon.ariaExpanded = "true";
  }
  const menu = document.querySelector(".header-menu");
};

// Sticky Header
const nav = document.querySelector("header");
const supportPageOffset = window.pageXOffset !== undefined;
const isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

let previousScrollPosition = 0;

const isScrollingDown = () => {
  // let scrolledPosition = supportPageOffset
  //   ? window.pageYOffset
  //   : isCSS1Compat
  //   ? document.documentElement.scrollTop
  //   : document.body.scrollTop;
  let scrolledPosition = window.pageYOffset;
  let isScrollDown;

  if (scrolledPosition > previousScrollPosition) {
    isScrollDown = true;
  } else {
    isScrollDown = false;
  }
  previousScrollPosition = scrolledPosition;
  return isScrollDown;
};

const handleNavScroll = () => {
  if (isScrollingDown() && !nav.contains(document.activeElement)) {
    nav.classList.add("scroll-down");
    nav.classList.remove("scroll-up");
  } else {
    nav.classList.add("scroll-up");
    nav.classList.remove("scroll-down");
  }
};

window.addEventListener("scroll", handleNavScroll);

// search toggle
const searchButton = document.querySelector("#search-button");
const searchContainer = document.querySelector("#search-container");

const overlay = document.querySelector(".overlay");

const openSearch = () => {
  if (window.innerWidth > 900) {
    searchButton.style.display = "none";
    searchContainer.style.display = "flex";
    const input = document.querySelector(".search-input");
    input.focus();
    overlay.style.display = "block";
  }
};

const closeSearch = () => {
  if (window.innerWidth > 900) {
    searchButton.style.display = "flex";
    searchContainer.style.display = "none";
    overlay.style.display = "none";
  }
};

document.addEventListener("click", function (event) {
  if (event.target === overlay) {
    closeSearch();
  }
});

// hero
const videContainer = document.querySelector(".video-container");

const videoLarge = `<source
                          src="https://www.lego.com/cdn/cs/set/assets/blt58880508a33aaef8/FRIENDS-202302-Page-Hero-Animated-Large.mp4"
                          type="video/mp4"
                        />`;

const videoMedium = ` <source
                          src="https://www.lego.com/cdn/cs/set/assets/blt109377085ec521fb/FRIENDS-202302-Page-Hero-Animated-Medium.mp4"
                          type="video/mp4"
                        />`;

const videoSmall = ` <source
                          src="https://www.lego.com/cdn/cs/set/assets/blte25bf0c1268f2426/FRIENDS-202302-Page-Hero-Animated-Small.mp4"
                          type="video/mp4"
                        />`;

const setVideo = () => {
  let source = "";
  if (window.innerWidth > 900) {
    source = videoLarge;
  } else if (window.innerWidth > 600) {
    source = videoMedium;
  } else {
    source = videoSmall;
  }
  return `<video width="100%" loop muted height="auto" class="hero-video" autoplay>${source}</video>  
        <img
          src="assets/images/friends.png"
          width="105"
          height="50"
          class="hero-friends"
        />`;
};

const handleWindowResize = () => {
  videContainer.innerHTML = setVideo();
};
handleWindowResize();
window.addEventListener("resize", handleWindowResize);

// play / pause video

const playButton = `  <button onclick="playVideo()" class="hero-play">
          <img src="assets/icons/play.svg" width="40" height="40" alt="" />
        </button>`;

const pauseButton = `<button onclick="stopVideo()" class="hero-stop">
          <img src="assets/icons/stop.svg" width="40" height="40" alt="" />
        </button>
`;

const playPauseButtonContainer = document.querySelector(".play-stop-button");
playPauseButtonContainer.innerHTML = pauseButton;
const stopVideo = () => {
  const video = document.querySelector(".hero-video");
  playPauseButtonContainer.innerHTML = playButton;
  video.pause();
};

const playVideo = () => {
  const video = document.querySelector(".hero-video");
  playPauseButtonContainer.innerHTML = pauseButton;
  video.play();
};
