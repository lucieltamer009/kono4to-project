let menuBtn = document.getElementById("menuBtn");
let popup = document.getElementById("popup");
let closeBtn = document.getElementById("closeBtn");
let overlay = document.getElementById("overlay");

menuBtn.onclick = function () {
    popup.classList.add("active");
    overlay.style.display = "block";
};

closeBtn.onclick = function () {
    popup.classList.remove("active");
    overlay.style.display = "none";
};

overlay.onclick = function () {
    popup.classList.remove("active");
    overlay.style.display = "none";
};

let learnBtn = document.getElementById("learnBtn");
let learningPopup = document.getElementById("learningPopup");
let learningOverlay = document.getElementById("learningOverlay");
let closeLearning = document.getElementById("closeLearning");

learnBtn.onclick = function () {
    learningPopup.classList.add("show");
    learningOverlay.classList.add("show");
};

closeLearning.onclick = function () {
    learningPopup.classList.remove("show");
    learningOverlay.classList.remove("show");
};

learningOverlay.onclick = function () {
    learningPopup.classList.remove("show");
    learningOverlay.classList.remove("show");
};

let slides = document.querySelectorAll(".slide");
let dotsContainer = document.querySelector(".dots");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;
let slideInterval;

dotsContainer.innerHTML = "";

slides.forEach(function (slide, index) {
    let dot = document.createElement("span");

    dot.classList.add("dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.dataset.slide = index;

    dot.onclick = function () {
        showSlide(index);
        restartSlider();
    };

    dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dot");

function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function (dot) {
        dot.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

nextBtn.onclick = function () {
    showSlide(currentSlide + 1);
    restartSlider();
};

prevBtn.onclick = function () {
    showSlide(currentSlide - 1);
    restartSlider();
};

function startSlider() {
    slideInterval = setInterval(function () {
        showSlide(currentSlide + 1);
    }, 4000);
}

function restartSlider() {
    clearInterval(slideInterval);
    startSlider();
}

startSlider();
