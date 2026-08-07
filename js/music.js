/* ==========================================================
   Music Controller
========================================================== */

const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

let musicStarted = false;

function initializeMusic() {

    bgMusic.volume = 0;

    document.addEventListener(
        "click",
        () => {

            if (!musicStarted) {

                musicStarted = true;

                fadeInMusic();

            }

        },
        { once: true }
    );
}

function fadeInMusic() {

    bgMusic.play().catch(() => {});

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.02;

        if (volume >= 0.35) {

            volume = 0.35;
            clearInterval(fade);

        }

        bgMusic.volume = volume;

    }, 100);

}

function fadeOutMusic() {

    let volume = bgMusic.volume;

    const fade = setInterval(() => {

        volume -= 0.02;

        if (volume <= 0) {

            volume = 0;

            bgMusic.pause();

            clearInterval(fade);

        }

        bgMusic.volume = volume;

    }, 100);

}

function toggleMusic() {

    if (bgMusic.paused) {

        bgMusic.play();

        musicButton.innerHTML = "🔊";

    } else {

        bgMusic.pause();

        musicButton.innerHTML = "🎵";

    }

}

musicButton.addEventListener("click", toggleMusic);