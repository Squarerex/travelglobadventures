const bcarousel = document.querySelector('.bcarousel');

const bleft = document.querySelector('.bleft-arrow');
const bright = document.querySelector('.bright-arrow');

let bcurrentIndex = 0;
let bprevIndex;
const bimages = document.querySelectorAll(".bcarousel-image");

const btotalImages = Object.keys(bimages).length;

const bimageWidth = 30;

bright.addEventListener("click", () => {
    bcarousel.classList.add("sliding-transition");

    bprevIndex = bcurrentIndex;
    bcurrentIndex = (bcurrentIndex + 1) % btotalImages;

    bcarousel.style.transform = `translateX(-${bimageWidth}%)`;
    
    setTimeout(() => {
        bcarousel.appendChild(bimages[bprevIndex]);
        bcarousel.classList.remove("sliding-transition");
        bcarousel.style.transform = "";
    }, 500);
});

bleft.addEventListener("click", () => {
    bprevIndex = bcurrentIndex;
    bcurrentIndex = (bcurrentIndex - 1 + btotalImages) % btotalImages;

    bcarousel.style.transform = `translateX(-${bimageWidth}%)`;
    bcarousel.insertBefore(bimages[bcurrentIndex], bcarousel.firstChild);
    
    setTimeout(() => {
        bcarousel.style.transform = "";
        bcarousel.classList.add("sliding-transition");
    }, 10);

    setTimeout(() => {
        bcarousel.classList.remove("sliding-transition");
    }, 490);
});