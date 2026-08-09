/* ==========================================================
   Happy Birthday PC ❤️
   app.js
========================================================== */
let giftOpened = false;
document.addEventListener("DOMContentLoaded", () => {

    initialize();

});
let memoryTimer = null;

// ======================================
// Global Variables
// ======================================

const loadingScreen = document.getElementById("loading-screen");

const introPage = document.getElementById("intro");

const giftPage = document.getElementById("gift");

const memoriesPage = document.getElementById("memories");

const letterPage = document.getElementById("letter");

const celebrationPage = document.getElementById("celebration");

const music = document.getElementById("bgMusic");

const musicButton = document.getElementById("musicButton");

const beginButton = document.getElementById("beginJourney");

const gift = document.getElementById("giftBox");

const giftText = document.getElementById("giftText");


// ======================================
// Initialize
// ======================================

function initialize(){

    setTimeout(() => {

        loadingScreen.style.opacity = "0";

        setTimeout(() => {

            loadingScreen.style.display = "none";

        },800);

    },2200);

    startParticles();

}


// ======================================
// Music
// ======================================

musicButton.addEventListener("click", () => {

    if(music.paused){

        music.play();

        musicButton.innerHTML = "🔊";

    }

    else{

        music.pause();

        musicButton.innerHTML = "🎵";

    }

});


// ======================================
// Begin Journey
// ======================================

beginButton.addEventListener("click", () => {

    music.play();

    fadeOut(introPage);

    setTimeout(() => {

        fadeIn(giftPage);

    },800);

});


// ======================================
// Gift Animation
// ======================================

gift.addEventListener("click", () => {

    if (giftOpened) return;

    giftOpened = true;

    gift.classList.add("open");

    giftText.innerHTML =

        "✨ Your journey is about to begin... ❤️";

    createSparkles();
    // ======================================
// Memories Slideshow
// ======================================

    const photos = [

        "images/photo1.jpg",

        "images/photo2.jpg",

        "images/photo3.jpg",

        "images/photo4.jpg",

        "images/photo5.jpg",

        "images/photo6.jpg",

        "images/photo10.jpg"

    ];

    const captions = [

        "My Favourite Human 🥹❤️",

        "Every smile with you became my favourite memory ❤️",

        "Thank you for making every moment unforgettable ✨",

        "Thank you for being there ❤️",

        " ✨ Better Together ✨",

        "Life feels brighter with you by my side 🥹",

        "Happy Birthday to my favourite girl 🎂❤️"

    ];

    let currentPhoto = 0;

    function startMemories(){

        currentPhoto = 0;

        showPhoto(currentPhoto);

    }

    function showPhoto(index){

        const image = document.getElementById("memoryImage");

        const caption = document.getElementById("memoryCaption");

        const counter = document.getElementById("memoryCounter");

        const progress = document.getElementById("progressBar");

        image.style.opacity = 0;

        progress.style.transition = "none";

        progress.style.width = "0%";

        setTimeout(()=>{

            image.src = photos[index];
            document.getElementById("memoryBackground").src = photos[index];

            caption.innerHTML = captions[index];

            counter.innerHTML = (index+1)+" / "+photos.length;

            image.style.opacity = 1;

            image.style.animation = "none";

            void image.offsetWidth;

            image.style.animation = "zoomImage 6s linear forwards";

            progress.style.transition = "width 6s linear";

            progress.style.width = "100%";

        },300);

    }

    function nextPhoto(){

        currentPhoto++;

        if(currentPhoto >= photos.length){

            clearInterval(memoryTimer);

            fadeOut(memoriesPage);

            setTimeout(() => {

                fadeIn(letterPage);

                startLetter();

            }, 800);

            return;

        }

        showPhoto(currentPhoto);

    }

    createHearts();

    setTimeout(() => {

        fadeOut(giftPage);

        setTimeout(() => {

            fadeIn(memoriesPage);

            startMemories();

            memoryTimer = setInterval(nextPhoto, 6000);

        },800);

    },3000);

});


// ======================================
// Fade In
// ======================================

function fadeIn(section){

    document
        .querySelectorAll(".page")
        .forEach(page=>{

            page.classList.remove("active");

        });

    section.classList.add("active");

    section.style.opacity = 0;

    section.style.display = "grid";

    setTimeout(()=>{

        section.style.transition = ".8s";

        section.style.opacity = 1;

    },50);

}


// ======================================
// Fade Out
// ======================================

function fadeOut(section){

    section.style.opacity = 0;

    setTimeout(()=>{

        section.style.display="none";

    },700);

}


// ======================================
// Hearts
// ======================================

function createHearts(){

    for(let i=0;i<25;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=(45+Math.random()*10)+"vw";

        heart.style.top="55vh";

        heart.style.fontSize=(18+Math.random()*16)+"px";

        heart.style.pointerEvents="none";

        heart.style.transition="4s";

        heart.style.zIndex=999;

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform=

                `translate(
            ${Math.random()*200-100}px,
            -${300+Math.random()*200}px)
            rotate(${Math.random()*360}deg)`;

            heart.style.opacity=0;

        },50);

        setTimeout(()=>{

            heart.remove();

        },4200);

    }

}


// ======================================
// Sparkles
// ======================================

function createSparkles(){

    for(let i=0;i<60;i++){

        const star=document.createElement("div");

        star.innerHTML="✨";

        star.style.position="fixed";

        star.style.left="50vw";

        star.style.top="55vh";

        star.style.fontSize=(14+Math.random()*14)+"px";

        star.style.pointerEvents="none";

        star.style.transition="2.5s";

        document.body.appendChild(star);

        setTimeout(()=>{

            star.style.transform=

                `translate(
            ${Math.random()*500-250}px,
            ${Math.random()*500-250}px)
            rotate(360deg)`;

            star.style.opacity=0;

        },50);

        setTimeout(()=>{

            star.remove();

        },2500);

    }

}
// ======================================
// Letter
// ======================================

const birthdayLetter = `

Happy Birthday to my favourite person! ❤️

To the one who holds my whole heart 
and makes every single day brighter.✨✨
Life is just so much sweeter, funnier,
and more beautiful with you by my side.
Thank you for being my constant and my biggest cheerleader. 
I love you more than words can say!! 💖

Stay happy. Stay blessed.💖
Never stop being
the amazing person you are.

Happy Birthday once again
baby!! 🥹💐🎉

Loads of love
-Sandy
`;

let letterIndex = 0;

function startLetter(){
    const area = document.getElementById("letterText");

    const cursor = document.getElementById("cursor");

    area.innerHTML = "";

    letterIndex = 0;

    const timer = setInterval(()=>{

        area.innerHTML += birthdayLetter.charAt(letterIndex);

        letterIndex++;

        area.scrollTop = area.scrollHeight;

        if(letterIndex >= birthdayLetter.length){

            clearInterval(timer);

            cursor.style.display="none";

            setTimeout(()=>{

                fadeOut(letterPage);

                setTimeout(()=>{

                    fadeIn(celebrationPage);

                    startCelebration();

                },800);

            },5000);

        }

    },35);
}
// ======================================
// Celebration
// ======================================

function startCelebration(){

    let number = 3;

    const countdown =
        document.getElementById("countdownText");

    const content =
        document.getElementById("birthdayContent");

    const timer = setInterval(()=>{

        number--;

        if(number>0){

            countdown.innerHTML = number;

        }

        else{

            clearInterval(timer);

            countdown.style.display="none";

            content.style.display="block";

            startFireworks();

            startBalloons();

            createHearts();

            createSparkles();

        }

    },1000);

}

