const carousel = document.querySelector(".carousel-fs"),
    firstCard = document.getElementById("first_card-fs"),
    arrowIcons = document.querySelectorAll(".wrapper-fs i");
const cards = document.querySelectorAll(".rfy_cards-fs");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {

    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstCardWidth = firstCard.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left-fs" ? -firstCardWidth : firstCardWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});

const autoSlide = () => {
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff);
    let firstCardWidth = firstCard.clientWidth + 14;
    let valDifference = firstCardWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstCardWidth / 3 ? valDifference : -positionDiff;
    }

    carousel.scrollLeft -= positionDiff > firstCardWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

// 4 cards when sceen size greater than is 1200px
// 3 cards when sceen size greater than is 900px
// 2 cards when sceen size greater than is 600px
// 1 card when sceen size lower than is 600px

const resizeCards = () => {
    let cardWidth;
    if (window.innerWidth > 1200) {
        cardWidth = carousel.clientWidth / 4;
        console.log("4");
    } else if (window.innerWidth > 900) {
        cardWidth = carousel.clientWidth / 3;
        console.log("3");
    } else if (window.innerWidth > 600) {
        cardWidth = carousel.clientWidth / 2;
        console.log("2");
    } else {
        cardWidth = carousel.clientWidth;
        console.log("1");
    }
    cards.forEach(card => card.style.width = cardWidth + "px");
    showHideIcons();
}

window.addEventListener("resize", resizeCards);
