var images = [
    "../images/sube1.png",
    "../images/sube2.png",
    "../images/sube3.png",
    "../images/sube4.png"
];

var currentIndex = 0;
var section1Div = document.querySelector('.section1');

function changeBackground() {
    section1Div.style.backgroundImage = "url('" + images[currentIndex] + "')";

    currentIndex++;
    if (currentIndex === images.length) {
        currentIndex = 0;
    }
}

setInterval(changeBackground, 3000);