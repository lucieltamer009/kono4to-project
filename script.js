let menuBtn = document.getElementById("menuBtn");
let popup = document.getElementById("popup");
let closeBtn = document.getElementById("closeBtn");
let overlay = document.getElementById("overlay");


menuBtn.onclick = function(){

    popup.classList.add("active");
    overlay.style.display = "block";

}


closeBtn.onclick = function(){

    popup.classList.remove("active");
    overlay.style.display = "none";

}


overlay.onclick = function(){

    popup.classList.remove("active");
    overlay.style.display = "none";

}
let learnBtn = document.getElementById("learnBtn");
let learningPopup = document.getElementById("learningPopup");
let learningOverlay = document.getElementById("learningOverlay");
let closeLearning = document.getElementById("closeLearning");


learnBtn.onclick = function(){

    learningPopup.classList.add("show");
    learningOverlay.classList.add("show");

}


closeLearning.onclick = function(){

    learningPopup.classList.remove("show");
    learningOverlay.classList.remove("show");

}


learningOverlay.onclick = function(){

    learningPopup.classList.remove("show");
    learningOverlay.classList.remove("show");

}