// hero
const videContainer = document.querySelector(".video-container");

const videoLarge = `<source src="assets/videos/hero-large.mp4" type="video/mp4"/>`;

const videoMedium = ` <source src="assets/videos/hero-medium.mp4" type="video/mp4"/>`;

const videoSmall = ` <source src="assets/videos/hero-small.mp4" type="video/mp4"/>`;

let lastSize = "";
const setVideo = () => {
  let source = "";
  let size = "";
  if (window.innerWidth > 900) {
    source = videoLarge;
    size = "l";
  } else if (window.innerWidth > 600) {
    source = videoMedium;
    size = "m";
  } else {
    source = videoSmall;
    size = "s";
  }

  if (size === lastSize) return;
  lastSize = size;
  return `<video width="100%" loop muted height="auto" class="hero-video" autoplay>${source}</video>  
        <img
          src="assets/images/hero/friends.png"
          width="105"
          height="50"
          class="hero-friends"
        />`;
};

const handleHeroWindowResize = () => {
  const vid = setVideo();
  if (vid === undefined) return;
  videContainer.innerHTML = vid;
};
handleHeroWindowResize();
window.addEventListener("resize", handleHeroWindowResize);

// play / pause video

const playButton = `  <button onclick="playVideo()" class="hero-play">
          <img src="assets/icons/hero/play.svg" width="40" height="40" alt="" />
        </button>`;

const pauseButton = `<button onclick="stopVideo()" class="hero-stop">
          <img src="assets/icons/hero/stop.svg" width="40" height="40" alt="" />
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
