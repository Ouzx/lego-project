let officialText = document.querySelector(".Official_Text");
let ReadMore = document.querySelector("#Official-ReadMore");

function myReadMore() {
    officialText.style.display = "inline-block";
    ReadMore.style.display = "none";
}

function myReadLess() {
    officialText.style.display = "-webkit-box";
    ReadMore.style.display = "inline-block";
}