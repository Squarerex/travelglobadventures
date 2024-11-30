const ccarousel = document.querySelector('.ccarousel');

const cleft = document.querySelector('.cleft-arrow');
const cright = document.querySelector('.cright-arrow');

let ccurrentIndex = 0;
let cprevIndex;
const cimages = document.querySelectorAll(".ccarousel-image");

const ctotalImages = Object.keys(cimages).length;

const cimageWidth = 30;

cright.addEventListener("click", () => {
    ccarousel.classList.add("sliding-transition");

    cprevIndex = ccurrentIndex;
    ccurrentIndex = (ccurrentIndex + 1) % ctotalImages;

    ccarousel.style.transform = `translateX(-${cimageWidth}%)`;
    
    setTimeout(() => {
        ccarousel.appendChild(cimages[cprevIndex]);
        ccarousel.classList.remove("sliding-transition");
        ccarousel.style.transform = "";
    }, 500);
});

cleft.addEventListener("click", () => {
    cprevIndex = ccurrentIndex;
    ccurrentIndex = (ccurrentIndex - 1 + ctotalImages) % ctotalImages;

    ccarousel.style.transform = `translateX(-${cimageWidth}%)`;
    ccarousel.insertBefore(cimages[ccurrentIndex], ccarousel.firstChild);
    
    setTimeout(() => {
        ccarousel.style.transform = "";
        ccarousel.classList.add("sliding-transition");
    }, 10);

    setTimeout(() => {
        ccarousel.classList.remove("sliding-transition");
    }, 490);
});