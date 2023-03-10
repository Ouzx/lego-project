let email = document.querySelector(".Footer-Email-Label-Input");
let validTick = document.querySelector(".Valid-Tick");
let wrongIcon = document.querySelector(".Wrong-Icon");
let statusBar = document.querySelector(".Validation-Statusbar");
let emailError = document.querySelector(".Email-Input-Error");

const getValue = () => {
    setTimeout(() => {
        email.setAttribute('value', email.value);
      }, 50);

      /////////////////////////////////////////////////
let emailControl = email.value;
let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if (emailRegex.test(emailControl)) {
    wrongIcon.style.display = "none";
    validTick.style.display = "block";
    statusBar.style.backgroundColor = "green";
}
else {
    validTick.style.display = "none";
    wrongIcon.style.display = "block";
    statusBar.style.backgroundColor = "red";
    emailError.innerHTML = "email must be a valid email";
}

}

email.addEventListener("keydown", getValue);
