/* ==========================================================
   Happy Birthday PC ❤️
   Shared JavaScript
========================================================== */

// ----------------------
// Smooth Page Transition
// ----------------------
function goToPage(page) {
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = page;
    }, 500);
}

// Fade in page
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// ----------------------
// Typewriter Effect
// ----------------------

function typeWriter(id, text, speed = 30, callback = null) {

    const element = document.getElementById(id);

    if (!element) return;

    element.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, speed);

        } else {

            if (callback)
                callback();
        }
    }

    typing();
}


// ----------------------
// Automatic Slideshow
// ----------------------

function startSlideshow(imageId, captionId, photos, captions) {

    let index = 0;

    const image = document.getElementById(imageId);

    const caption = document.getElementById(captionId);

    image.src = photos[0];
    caption.innerHTML = captions[0];

    setInterval(() => {

        index++;

        if (index >= photos.length)
            index = 0;

        image.style.opacity = "0";

        setTimeout(() => {

            image.src = photos[index];

            caption.innerHTML = captions[index];

            image.style.opacity = "1";

        }, 400);

    }, 4000);

}


// ----------------------
// Floating Hearts
// ----------------------

function floatingHearts() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-40px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.opacity = "1";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 6s linear";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = "translateY(-120vh)";
        heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

setInterval(floatingHearts, 1200);


// ----------------------
// Confetti
// ----------------------

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = ["🎉", "✨", "🎊", "💖", "🎈"][Math.floor(Math.random() * 5)];

        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize = (16 + Math.random() * 16) + "px";

        confetti.style.pointerEvents = "none";

        confetti.style.transition = "transform 5s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.transform = "translateY(120vh) rotate(720deg)";

        }, 100);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}


// ----------------------
// Gift Animation
// ----------------------

function openGift(giftId, buttonId) {

    const gift = document.getElementById(giftId);

    gift.classList.add("opened");

    createConfetti();

    setTimeout(() => {

        document.getElementById(buttonId).style.display = "inline-block";

    }, 1000);

}


// ----------------------
// Music Controls
// ----------------------

function playMusic(id) {

    const music = document.getElementById(id);

    if (!music)
        return;

    music.play();

}

function pauseMusic(id) {

    const music = document.getElementById(id);

    if (!music)
        return;

    music.pause();

}

function toggleMusic(id) {

    const music = document.getElementById(id);

    if (!music)
        return;

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }

}


// ----------------------
// Replay Journey
// ----------------------

function replayJourney() {

    goToPage("index.html");

}


// ----------------------
// Sparkle Effect
// ----------------------

function sparkle() {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.fontSize = "18px";

    star.style.opacity = "1";

    star.style.pointerEvents = "none";

    star.style.transition = "all 2s ease";

    document.body.appendChild(star);

    setTimeout(() => {

        star.style.opacity = "0";
        star.style.transform = "scale(2)";

    }, 100);

    setTimeout(() => {

        star.remove();

    }, 2000);

}

setInterval(sparkle, 700);
