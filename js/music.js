/* ==========================================================
   Happy Birthday Music Controller
========================================================== */

let backgroundMusic = null;
let musicStarted = false;

function initializeMusic(audioId) {

    backgroundMusic = document.getElementById(audioId);

    if (!backgroundMusic)
        return;

    backgroundMusic.volume = 0.4;

    document.addEventListener("click", startMusicOnce, {
        once: true
    });

}

function startMusicOnce() {

    if (musicStarted || !backgroundMusic)
        return;

    musicStarted = true;

    backgroundMusic.play().catch(() => {
        console.log("Autoplay blocked until user interaction.");
    });

}

function playMusic() {

    if (!backgroundMusic)
        return;

    backgroundMusic.play();

}

function pauseMusic() {

    if (!backgroundMusic)
        return;

    backgroundMusic.pause();

}

function toggleMusic() {

    if (!backgroundMusic)
        return;

    if (backgroundMusic.paused) {

        backgroundMusic.play();

    } else {

        backgroundMusic.pause();

    }

}

function setVolume(value) {

    if (!backgroundMusic)
        return;

    backgroundMusic.volume = value;

}

function fadeInMusic(duration = 2000) {

    if (!backgroundMusic)
        return;

    backgroundMusic.volume = 0;

    backgroundMusic.play();

    let volume = 0;

    const interval = setInterval(() => {

        volume += 0.02;

        if (volume >= 0.4) {

            volume = 0.4;

            clearInterval(interval);

        }

        backgroundMusic.volume = volume;

    }, duration / 20);

}

function fadeOutMusic(duration = 2000) {

    if (!backgroundMusic)
        return;

    let volume = backgroundMusic.volume;

    const interval = setInterval(() => {

        volume -= 0.02;

        if (volume <= 0) {

            volume = 0;

            backgroundMusic.pause();

            clearInterval(interval);

        }

        backgroundMusic.volume = volume;

    }, duration / 20);

}
