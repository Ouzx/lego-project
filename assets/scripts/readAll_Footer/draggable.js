let myOuter = document.querySelector(".ReadAll_Container_Body_Outer");

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    // updating global variables value on mouse down event
    
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = myOuter.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    
    let positionDiff = e.pageX - prevPageX;
    let positionLast = prevScrollLeft - positionDiff * 3 ;  // duruma göre * 2
    myOuter.scrollLeft = positionLast;
    
    
}

const dragStop = () => {
    isDragStart = false;
    
}

myOuter.addEventListener("pointerdown", dragStart);


myOuter.addEventListener("pointermove", dragging);


myOuter.addEventListener("pointerup", dragStop);


/* const slider = document.querySelector('.ReadAll_Container_Body_Outer');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false); */
