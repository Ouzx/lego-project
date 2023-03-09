const container = document.querySelector(".ReadAll_Container_Body_Outer");
const readAllPrevButton = document.querySelector("#read-all-prev-button");
const readAllNextButton = document.querySelector("#read-all-next-button");

const sampleItem = document.querySelector(".ReadAll_Container");
let sampleItemWidth = sampleItem.offsetWidth;

let multiplier = 2;


function moveNext(){  
    container.scrollLeft += sampleItemWidth * multiplier;
    checkScroll();
    
}

function movePrev(){
    container.scrollLeft -= sampleItemWidth * multiplier;
    checkScroll();
}

const checkScroll = () => {
    let scrollAmount = container.scrollLeft;
    sampleItemWidth = sampleItem.offsetWidth;

    const windowItem = document.querySelector("body");
    const windowItemWidth = windowItem.offsetWidth;

    readAllPrevButton.style.display = (scrollAmount < 20 || windowItemWidth > 1200 || windowItemWidth < 601) ? "none" : "block";

    /* if (scrollAmount < 5 || windowItemWidth > 1200 || windowItemWidth < 601) readAllPrevButton.style.display = "none"; 
    else readAllPrevButton.style.display = "block"; */

    
    readAllNextButton.style.display = (scrollAmount > (sampleItemWidth * 1.5) || windowItemWidth > 1200 || windowItemWidth < 601) ? "none" : "block";

    /* if (scrollAmount > sampleItemWidth || windowItemWidth > 1200 || windowItemWidth < 601) readAllNextButton.style.display = "none"; 
   else readAllNextButton.style.display = "block"; */
    

}


checkScroll();

window.addEventListener("resize", checkScroll);