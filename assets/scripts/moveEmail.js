const oldParent = document.querySelector(".Footer-Main");
const child = document.querySelector(".Footer-Email");   
const sibling = document.querySelector(".Footer-Dropdowns"); 
const newParent = document.querySelector(".Footer-FollowUs");
let isMoved = true;

let moveEmail = () => {
    const body = document.querySelector("body");
    const screenWidth = body.offsetWidth;
    
    if (screenWidth <= 900 && isMoved) return;

    else if (screenWidth > 900 && isMoved) {
        newParent.insertBefore(child, newParent.firstChild);
        isMoved = false; 
        return;
    }

    else if (screenWidth <= 900 && !isMoved) {
        oldParent.insertBefore(child, sibling);
        isMoved = true;
        return;
    }  
}

moveEmail();
window.addEventListener("resize", moveEmail);
