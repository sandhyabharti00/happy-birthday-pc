/* ==========================================================
   Fireworks Animation
========================================================== */

const canvas = document.getElementById("fireworksCanvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

const particles = [];

class Particle {

    constructor(x, y, color) {

        this.x = x;
        this.y = y;

        this.radius = Math.random() * 3 + 2;

        this.color = color;

        this.speedX = (Math.random() - 0.5) * 8;
        this.speedY = (Math.random() - 0.5) * 8;

        this.life = 100;

    }

    update() {

        this.x += this.speedX;
        this.y += this.speedY;

        this.speedY += 0.03;

        this.life--;

    }

    draw() {

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        ctx.fillStyle = this.color;

        ctx.fill();

    }

}

function explode(x, y) {

    const colors = [

        "#ff4fa3",

        "#ffcc00",

        "#00d4ff",

        "#ffffff",

        "#9d4edd",

        "#ff6b6b"

    ];

    for (let i = 0; i < 100; i++) {

        particles.push(

            new Particle(

                x,

                y,

                colors[Math.floor(Math.random() * colors.length)]

            )

        );

    }

}

function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {

        const p = particles[i];

        p.update();

        p.draw();

        if (p.life <= 0) {

            particles.splice(i, 1);

        }

    }

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

let fireworkInterval = null;

function startFireworks() {

    if (fireworkInterval) return;

    fireworkInterval = setInterval(() => {

        const x = Math.random() * canvas.width;

        const y = Math.random() * canvas.height * 0.5;

        explode(x, y);

    }, 600);

}