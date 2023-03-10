let dropButton = document.getElementsByClassName("Dropdown-Button");
let child1 = document.getElementsByClassName("Drop-h4");   
let sibling1 = document.getElementsByClassName("Dropdown-Wrapper"); 
let parent1 = document.getElementsByClassName("Footer-Dropdown");
let notRemoved = true;

const resDrop = () => {
    const body = document.querySelector("body");
    const screenWidth = body.offsetWidth;
    
    if (screenWidth <= 900 && notRemoved) return;

    else if (screenWidth > 900 && notRemoved) {
        console.log(dropButton);
        for (let i = 0; i < 4; i++) {
            parent1[i].replaceChild(child1[i], dropButton[i]);
            // parent1[i].insertBefore(child1[i], this.firstChild);
            console.log(i);
        }
        notRemoved = false; 
        return;
    }

    else if (screenWidth <= 900 && !notRemoved) {
        // child.remove();
        // parent.insertBefore(dropButton, parent.firstChild);
        for (let i = 0; i < dropButton.length; i++) {
            child1[i].remove();
            parent[i].insertBefore(dropButton[i], sibling1[i]);
        }

        notRemoved = true;
        return;
    }  
}


resDrop();
window.addEventListener("resize", resDrop);