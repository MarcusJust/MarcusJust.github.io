const carouselSlajd = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//counter
var counter = 0;
const size = 500;

carouselSlajd.style.transform = "translateX(" + (-size * counter) + "px)";

//buttons listeners
nextBtn.addEventListener("click",()=>{
    if(counter >= carouselImages.length -1){
        counter = -1;
    }
    carouselSlajd.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlajd.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click",()=>{
    if(counter <= 0){
        counter = 5;
    }
    carouselSlajd.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlajd.style.transform = "translateX(" + (-size * counter) + "px)";
});
/*
carouselSlide.addEventListener("transitioned", () => {
    if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

    }
    if (carouselImages[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        counter >= carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

    }
});*/