/* ==========================================================
   Floating Balloons
========================================================== */

const balloonColors = [
    "#ff4fa3",
    "#ff8fc7",
    "#ffd166",
    "#4cc9f0",
    "#06d6a0",
    "#9d4edd"
];

let balloonInterval = null;

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    const size = 40 + Math.random() * 40;

    balloon.style.width = size + "px";
    balloon.style.height = size * 1.2 + "px";

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.background =
        balloonColors[Math.floor(Math.random() * balloonColors.length)];

    balloon.style.animationDuration =
        (8 + Math.random() * 5) + "s";

    document.body.appendChild(balloon);

    setTimeout(() => {

        balloon.remove();

    },13000);

}

function startBalloons(){

    if(balloonInterval) return;

    balloonInterval = setInterval(createBalloon,700);

}

function stopBalloons(){

    clearInterval(balloonInterval);

    balloonInterval = null;

}