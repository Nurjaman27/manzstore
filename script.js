let slides = document.getElementsByClassName("slide");
let images = document.querySelector(".images");
let currentSlide = 0;

function showSlide() {
  images.style.transform = `translateX(-${currentSlide * 100}%)`;
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 5000);
