/* ==========================================================
   Fireworks Animation
   Author: ChatGPT
========================================================== */

const canvas = document.createElement("canvas");
canvas.id = "fireworks";

canvas.style.position = "fixed";
canvas.style.left = "0";
canvas.style.top = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "999";

document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const fireworks = [];
const particles = [];

/* ===============================
   Firework Class
================================= */

class Firework {

    constructor() {

        this.x = Math.random() * canvas.width;

        this.y = canvas.height;

        this.targetY = Math.random() * canvas.height * 0.45 + 80;

        this.speed = 5 + Math.random() * 2;

        this.color = `hsl(${Math.random()*360},100%,60%)`;

    }

    update() {

        this.y -= this.speed;

        if (this.y <= this.targetY) {

            this.explode();

            return false;

        }

        return true;

    }

    draw() {

        ctx.beginPath();

        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);

        ctx.fillStyle = this.color;

        ctx.fill();

    }

    explode() {

        for (let i = 0; i < 90; i++) {

            particles.push(new Particle(this.x, this.y, this.color));

        }

    }

}

/* ===============================
   Particle Class
================================= */

class Particle {

    constructor(x, y, color) {

        this.x = x;

        this.y = y;

        this.color = color;

        this.angle = Math.random() * Math.PI * 2;

        this.speed = Math.random() * 6 + 2;

        this.life = 100;

    }

    update() {

        this.x += Math.cos(this.angle) * this.speed;

        this.y += Math.sin(this.angle) * this.speed;

        this.speed *= 0.98;

        this.life--;

        return this.life > 0;

    }

    draw() {

        ctx.beginPath();

        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);

        ctx.fillStyle = this.color;

        ctx.fill();

    }

}

/* ===============================
   Animation
================================= */

function animate() {

    ctx.fillStyle = "rgba(0,0,0,0.18)";

    ctx.fillRect(0,0,canvas.width,canvas.height);

    for(let i = fireworks.length-1; i>=0; i--){

        if(fireworks[i].update()){

            fireworks[i].draw();

        }

        else{

            fireworks.splice(i,1);

        }

    }

    for(let i = particles.length-1; i>=0; i--){

        if(particles[i].update()){

            particles[i].draw();

        }

        else{

            particles.splice(i,1);

        }

    }

    requestAnimationFrame(animate);

}

animate();

/* ===============================
   Launch Fireworks
================================= */

setInterval(()=>{

    fireworks.push(new Firework());

},700);
