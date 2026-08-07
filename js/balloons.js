/* ==========================================================
   Floating Balloons Animation
========================================================== */

const balloonColors = [
    "#ff4d6d",
    "#ff758f",
    "#ffb703",
    "#3a86ff",
    "#06d6a0",
    "#9b5de5",
    "#f15bb5"
];

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    const size = Math.random() * 40 + 50;

    balloon.style.width = size + "px";
    balloon.style.height = size * 1.25 + "px";

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.bottom = "-150px";

    balloon.style.background =
        balloonColors[Math.floor(Math.random() * balloonColors.length)];

    balloon.style.animationDuration =
        (8 + Math.random() * 8) + "s";

    balloon.style.animationDelay =
        (Math.random() * 2) + "s";

    document.body.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 18000);

}

setInterval(createBalloon, 900);
