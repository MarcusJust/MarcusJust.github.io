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
    carouselSlajd.style.transition = "transform 0.2s ease-in-out";
    counter++;
    carouselSlajd.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click",()=>{
    if(counter <= 0){
        counter = 6;
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
//mapa
var map = L.map('map').setView([44.429764, -110.584663], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([44.429764, -110.584663]).addTo(map)
    .bindPopup('This is YellowStone')
    .openPopup();
//ligtbox
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }