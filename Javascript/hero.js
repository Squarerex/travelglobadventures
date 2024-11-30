const carousel = document.querySelector('.carousel');

const left = document.querySelector('.left-arrow');
const right = document.querySelector('.right-arrow');

let currentIndex = 0;
let prevIndex;
const images = document.querySelectorAll(".carousel-image");

const totalImages = Object.keys(images).length;

const imageWidth = 100;

right.addEventListener("click", () => {
    carousel.classList.add("sliding-transition");

    prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % totalImages;

    carousel.style.transform = `translateX(-${imageWidth}%)`;
    
    setTimeout(() => {
        carousel.appendChild(images[prevIndex]);
        carousel.classList.remove("sliding-transition");
        carousel.style.transform = "";
    }, 500);
});

left.addEventListener("click", () => {
    prevIndex = currentIndex;
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;

    carousel.style.transform = `translateX(-${imageWidth}%)`;
    carousel.insertBefore(images[currentIndex], carousel.firstChild);
    
    setTimeout(() => {
        carousel.style.transform = "";
        carousel.classList.add("sliding-transition");
    }, 10);

    setTimeout(() => {
        carousel.classList.remove("sliding-transition");
    }, 490);
});