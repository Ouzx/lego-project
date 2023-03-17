const cards = document.querySelectorAll(".rfy_cards-fs");
const carousel = document.querySelector(".carousel-fs");

const resizeCards = () => {
    let cardWidth;
    if (window.innerWidth > 1200) {
        cardWidth = carousel.clientWidth / 4;
    } else if (window.innerWidth > 900) {
        cardWidth = carousel.clientWidth / 3;
    } else if (window.innerWidth > 600) {
        cardWidth = carousel.clientWidth / 2;
    } else {
        cardWidth = carousel.clientWidth;
    }
    cards.forEach(card => card.style.width = cardWidth + "px");
    // showHideIcons();
}

window.addEventListener("resize", resizeCards);

const equalHeight = () => {
    // each card has 2 sections: top (img) and bottom (content)
    // imgs has different height, so we need to change height of bottom section
    // to make all cards have same height
    let maxHeight = 0;
    cards.forEach(card => {
        let cardHeight = card.clientHeight;
        if (cardHeight > maxHeight) maxHeight = cardHeight;
    }
    );
    cards.forEach(card => {
        // select bottom section
        let cardContent = card.querySelector(".card-bottom-fs");
        padding = parseInt(getComputedStyle(cardContent).paddingTop) + parseInt(getComputedStyle(cardContent).paddingBottom);
        cardContent.style.height = maxHeight - cardContent.offsetTop - padding + "px";

        cardContent.style.justifySelf = "flex-end";

    });

}

window.addEventListener("load", () => {
    resizeCards();
    equalHeight();
});
