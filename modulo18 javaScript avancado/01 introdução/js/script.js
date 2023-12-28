function displayMessage() {
    alert("hey");
}

window.onload = function () {
    var el = document.getElementById("mainText");
    el.innerHTML = el.innerHTML + ", Gabriel";
    el.style.background = "red";
    el.style.margin = "30px";
    el.style.border = "3px solid blue";

    var el2 = document.querySelector("p");
    el2.style.color = "red";

    var elemento = document.querySelectorAll("p");
    for (var i = 0; 1 < elemento.length; i++) {
        elemento[i].style.background = "gold";
    }
};
