const pages = Array.from(document.querySelectorAll(".page"));
const loadingScreen = document.getElementById("loading-screen");
const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");
const beginButton = document.getElementById("beginJourney");
const gift = document.getElementById("giftBox");
const giftText = document.getElementById("giftText");
const memoryImage = document.getElementById("memoryImage");
const memoryBackground = document.getElementById("memoryBackground");
const memoryCaption = document.getElementById("memoryCaption");
const memoryCounter = document.getElementById("memoryCounter");
const progressBar = document.getElementById("progressBar");

const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg"
];

const captions = [
    "Every smile with you became my favourite memory ❤️",
    "Thank you for making every moment unforgettable ✨",
    "Life feels brighter with you by my side 🥹",
    "Happy Birthday to my favourite girl 🎂❤️"
];

const birthdayLetter =
    "Happy Birthday to my favourite person! ❤️\n\n" +
    "Tum meri best friend hi nahi,\nmeri safe place,\nmeri biggest happiness\naur meri life ka sabse beautiful part ho.\n\n" +
    "Tmhare saath har chhota moment bhi\nspecial ban jaata hai.\n\n" +
    "Meri dua hai ki tmhari life hamesha\nhappiness, love, success,\naur endless smiles se bhari rahe.\n\n" +
    "Jo bhi tum dil se chaho,\nwoh sab tumhe mile.\n\n" +
    "Kabhi kisi cheez ki kami na ho,\naur tmhari cute si smile\nhamesha isi tarah chamakti rahe.\n\n" +
    "Thank you for always being there.\nFor understanding me without words.\nFor making life so much brighter.\n\n" +
    "I'm really lucky to have a best friend like you.\n\n" +
    "Stay happy. Stay blessed.\nNever stop being the amazing person you are.\n\n" +
    "Happy Birthday once again baby 🥹💐🎉\n\nLove you loads ❤️\n— Sandy";

let giftOpened = false;
let memoryTimeout = 0;
let letterTimer = 0;

function showPage(id) {
    pages.forEach(function (page) {
        page.classList.toggle("active", page.id === id);
        page.style.display = "";
        page.style.opacity = "";
    });
}

function setMusicButton() {
    const isPaused = music.paused;
    musicButton.textContent = isPaused ? "🎵" : "🔊";
    musicButton.setAttribute("aria-label", isPaused ? "Play music" : "Pause music");
}

function playMusic() {
    music.play().catch(function () {});
    setMusicButton();
}

function toggleMusic() {
    if (music.paused) {
        playMusic();
    } else {
        music.pause();
        setMusicButton();
    }
}

function createHearts() {
    for (let index = 0; index < 25; index += 1) {
        const heart = document.createElement("div");
        heart.textContent = "❤️";
        heart.style.position = "fixed";
        heart.style.left = (45 + Math.random() * 10) + "vw";
        heart.style.top = "55vh";
        heart.style.zIndex = "30";
        heart.style.fontSize = (18 + Math.random() * 16) + "px";
        heart.style.pointerEvents = "none";
        heart.style.transition = "transform 4s ease, opacity 4s ease";
        document.body.appendChild(heart);
        requestAnimationFrame(function () {
            heart.style.transform = "translate(" + (Math.random() * 200 - 100) + "px, -" + (300 + Math.random() * 200) + "px) rotate(" + (Math.random() * 360) + "deg)";
            heart.style.opacity = "0";
        });
        setTimeout(function () {
            heart.remove();
        }, 4200);
    }
}

function createSparkles() {
    for (let index = 0; index < 50; index += 1) {
        const sparkle = document.createElement("div");
        sparkle.textContent = "✨";
        sparkle.style.position = "fixed";
        sparkle.style.left = "50vw";
        sparkle.style.top = "55vh";
        sparkle.style.zIndex = "30";
        sparkle.style.fontSize = (14 + Math.random() * 14) + "px";
        sparkle.style.pointerEvents = "none";
        sparkle.style.transition = "transform 2.5s ease, opacity 2.5s ease";
        document.body.appendChild(sparkle);
        requestAnimationFrame(function () {
            sparkle.style.transform = "translate(" + (Math.random() * 500 - 250) + "px, " + (Math.random() * 500 - 250) + "px) rotate(360deg)";
            sparkle.style.opacity = "0";
        });
        setTimeout(function () {
            sparkle.remove();
        }, 2500);
    }
}

function renderMemory(index) {
    memoryImage.classList.add("is-fading");
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";

    setTimeout(function () {
        memoryImage.src = photos[index];
        memoryBackground.src = photos[index];
        memoryCaption.textContent = captions[index];
        memoryCounter.textContent = (index + 1) + " / " + photos.length;
        memoryImage.classList.remove("is-fading");

        requestAnimationFrame(function () {
            progressBar.style.transition = "width 6s linear";
            progressBar.style.width = "100%";
        });
    }, 220);
}

function startMemories() {
    let index = 0;
    clearTimeout(memoryTimeout);
    renderMemory(index);

    function advanceMemory() {
        index += 1;
        if (index === photos.length) {
            showPage("letter");
            startLetter();
            return;
        }
        renderMemory(index);
        memoryTimeout = setTimeout(advanceMemory, 6000);
    }

    memoryTimeout = setTimeout(advanceMemory, 6000);
}

function startLetter() {
    const letterText = document.getElementById("letterText");
    const cursor = document.getElementById("cursor");
    let index = 0;

    clearInterval(letterTimer);
    letterText.textContent = "";
    letterText.scrollTop = 0;
    cursor.hidden = false;

    letterTimer = setInterval(function () {
        letterText.textContent += birthdayLetter.slice(index, index + 2);
        index += 2;
        letterText.scrollTop = letterText.scrollHeight;

        if (index >= birthdayLetter.length) {
            clearInterval(letterTimer);
            cursor.hidden = true;
            setTimeout(startCelebration, 4200);
        }
    }, 24);
}

function startCelebration() {
    const countdown = document.getElementById("countdownText");
    const content = document.getElementById("birthdayContent");
    let number = 3;

    showPage("celebration");
    countdown.hidden = false;
    countdown.textContent = number;
    content.style.display = "none";

    const countdownTimer = setInterval(function () {
        number -= 1;
        if (number > 0) {
            countdown.textContent = number;
            return;
        }

        clearInterval(countdownTimer);
        countdown.hidden = true;
        content.style.display = "block";
        startFireworks();
        startBalloons();
        createHearts();
        createSparkles();
    }, 1000);
}

function openGift() {
    if (giftOpened) {
        return;
    }

    giftOpened = true;
    gift.classList.add("open");
    giftText.textContent = "✨ Your journey is about to begin... ❤️";
    createHearts();
    createSparkles();

    setTimeout(function () {
        showPage("memories");
        startMemories();
    }, 2200);
}

function initialize() {
    setMusicButton();
    startParticles();

    setTimeout(function () {
        loadingScreen.classList.add("is-hidden");
    }, 1200);

    musicButton.addEventListener("click", toggleMusic);
    beginButton.addEventListener("click", function () {
        playMusic();
        showPage("gift");
    });
    gift.addEventListener("click", openGift);
}

window.addEventListener("DOMContentLoaded", initialize);
