const dcarousel = document.querySelector('.dcarousel');

const dleft = document.querySelector('.dleft-arrow');
const dright = document.querySelector('.dright-arrow');

let dcurrentIndex = 0;
let dprevIndex;
const dimages = document.querySelectorAll(".dcarousel-image");

const dtotalImages = Object.keys(dimages).length;

const dimageWidth = 30;

dright.addEventListener("click", () => {
    dcarousel.classList.add("sliding-transition");

    dprevIndex = dcurrentIndex;
    dcurrentIndex = (dcurrentIndex + 1) % dtotalImages;

    dcarousel.style.transform = `translateX(-${dimageWidth}%)`;
    
    setTimeout(() => {
        dcarousel.appendChild(dimages[dprevIndex]);
        dcarousel.classList.remove("sliding-transition");
        dcarousel.style.transform = "";
    }, 500);
});

dleft.addEventListener("click", () => {
    dprevIndex = dcurrentIndex;
    dcurrentIndex = (dcurrentIndex - 1 + dtotalImages) % dtotalImages;

    dcarousel.style.transform = `translateX(-${dimageWidth}%)`;
    dcarousel.insertBefore(dimages[dcurrentIndex], dcarousel.firstChild);
    
    setTimeout(() => {
        dcarousel.style.transform = "";
        dcarousel.classList.add("sliding-transition");
    }, 10);

    setTimeout(() => {
        dcarousel.classList.remove("sliding-transition");
    }, 490);
});