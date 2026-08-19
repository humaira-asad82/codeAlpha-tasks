
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.right = "20px";
        navLinks.style.background = "#fff";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "10px";
        navLinks.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";
    }

});

// ==========================
// Sticky Navbar
// ==========================

window.addEventListener("scroll", function () {

const header = document.querySelector("header");

header.classList.toggle("sticky", window.scrollY > 50);

});

// ==========================
// Scroll To Top
// ==========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ==========================
// Testimonial Slider
// ==========================

const slides=document.querySelectorAll(".testimonial-card");

let currentSlide=0;

function showSlide(){

slides.forEach(slide=>{

slide.classList.remove("active");

});

slides[currentSlide].classList.add("active");

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

}

if(slides.length>0){

setInterval(showSlide,3000);

}

/* ==========================
SCROLL REVEAL
========================== */

function reveal(){

const reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;

let revealTop=reveals[i].getBoundingClientRect().top;

let revealPoint=120;

if(revealTop<windowHeight-revealPoint){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);

reveal();

/* ==========================
LOADER
========================== */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},700);

});

/* ==========================
   SCROLL REVEAL
========================== */

function revealSections(){

const reveals=document.querySelectorAll(".reveal");

reveals.forEach(section=>{

const windowHeight=window.innerHeight;

const revealTop=section.getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

window.addEventListener("load",revealSections);