/* ==========================================================
   Particles.js
   Stars • Hearts • Petals • Sparkles
========================================================== */

const PARTICLES = [
    "✨",
    "⭐",
    "💖",
    "❤️",
    "🌸"
];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createParticle() {

    const particle = document.createElement("div");

    particle.className = "magic-particle";

    particle.innerHTML =
        PARTICLES[Math.floor(Math.random() * PARTICLES.length)];

    particle.style.left = random(0, 100) + "vw";

    particle.style.top = "-40px";

    particle.style.fontSize =
        random(16, 30) + "px";

    particle.style.animationDuration =
        random(6, 14) + "s";

    particle.style.opacity =
        random(.4, 1);

    particle.style.transform =
        `rotate(${random(0,360)}deg)`;

    document.body.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    },15000);

}

setInterval(createParticle,350);
