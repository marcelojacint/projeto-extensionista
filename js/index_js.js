let indice = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function trocarSlide() {
    indice = (indice + 1) % totalSlides;
    slides.style.transform = `translateX(${-indice * 200}%)`;
}

setInterval(trocarSlide, 3000);
