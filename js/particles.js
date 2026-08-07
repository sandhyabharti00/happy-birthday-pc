/* ==========================================================
   Floating Particles
   Hearts • Petals • Sparkles
========================================================== */

const particleContainer = document.getElementById("particles");

const particleIcons = [
    "✨",
    "🌸",
    "❤️",
    "💖",
    "⭐"
];

function createParticle() {

    if (!particleContainer) return;

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.innerHTML =
        particleIcons[Math.floor(Math.random() * particleIcons.length)];

    particle.style.left = Math.random() * 100 + "vw";

    particle.style.fontSize =
        (16 + Math.random() * 16) + "px";

    particle.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    particle.style.opacity =
        (0.5 + Math.random() * 0.5);

    particle.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    particleContainer.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    },12000);

}

let particleInterval = null;

function startParticles(){

    if(particleInterval) return;

    particleInterval =
        setInterval(createParticle,350);

}

function stopParticles(){

    clearInterval(particleInterval);

    particleInterval = null;

}