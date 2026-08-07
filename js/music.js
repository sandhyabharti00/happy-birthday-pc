/* ==========================================================
   Music Controller
========================================================== */

let musicStarted = false;

function initializeMusic() {

    music.volume = 0;

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

    music.play().catch(() => {});

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.02;

        if (volume >= 0.35) {

            volume = 0.35;
            clearInterval(fade);

        }

        music.volume = volume;

    }, 100);

}

function fadeOutMusic() {

    let volume = music.volume;

    const fade = setInterval(() => {

        volume -= 0.02;

        if (volume <= 0) {

            volume = 0;

            music.pause();

            clearInterval(fade);

        }

        music.volume = volume;

    }, 100);

}

function toggleMusic() {

    if (music.paused) {

        music.play();

        document.getElementById("musicButton").innerHTML = "🔊";

    } else {

        music.pause();

        document.getElementById("musicButton").innerHTML = "🎵";

    }

}

document.getElementById("musicButton").addEventListener("click", toggleMusic);