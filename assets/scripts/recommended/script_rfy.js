// const carouselx = document.querySelector(".carousel");


// firstCard = document.getElementById("first_card"),
// arrowIcons = document.querySelectorAll(".wrapper i");

// let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

// const showHideIcons = () => {
   
//     arrowIcons[0].style.display = carouselx.scrollLeft <= 0 ? "none" : "block";
//     arrowIcons[1].style.display = carouselx.scrollLeft >= carouselx.clientWidth * 2 ? "none" : "block";
// }

// arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         let scrollWidth = carouselx.clientWidth;
//         carouselx.scrollLeft += icon.id == "left" ? -scrollWidth : scrollWidth;
//         setTimeout(() => showHideIcons(), 60);
//     });
// });

// const autoSlide = () => {
//     if(carouselx.scrollLeft - (carouselx.scrollWidth - carouselx.clientWidth) > -1 || carouselx.scrollLeft <= 0) return;

//     positionDiff = Math.abs(positionDiff);
//     let firstCardWidth = firstCard.clientWidth + 14;
//     let valDifference = firstCardWidth - positionDiff;

//     if(carouselx.scrollLeft > prevScrollLeft) {
//         return carouselx.scrollLeft += positionDiff > firstCardWidth / 3 ? valDifference : -positionDiff;
//     }
    
//     carouselx.scrollLeft -= positionDiff > firstCardWidth / 3 ? valDifference : -positionDiff;
// }

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX || e.touches[0].pageX;
//     prevScrollLeft = carouselx.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragStart) return;
//     e.preventDefault();
//     isDragging = true;
//     carouselx.classList.add("dragging");
//     positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//     carouselx.scrollLeft = prevScrollLeft - positionDiff;
//     showHideIcons();
// }

// const dragStop = () => {
//     isDragStart = false;
//     carouselx.classList.remove("dragging");

//     if(!isDragging) return;
//     isDragging = false;
//     autoSlide();
// }

// carouselx.addEventListener("mousedown", dragStart);
// carouselx.addEventListener("touchstart", dragStart);

// document.addEventListener("mousemove", dragging);
// carouselx.addEventListener("touchmove", dragging);

// document.addEventListener("mouseup", dragStop);
// carouselx.addEventListener("touchend", dragStop);
