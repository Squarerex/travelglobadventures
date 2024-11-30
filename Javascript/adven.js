const acarousel = document.querySelector('.acarousel');

const aleft = document.querySelector('.aleft-arrow');
const aright = document.querySelector('.aright-arrow');

let acurrentIndex = 0;
let aprevIndex;
const aimages = document.querySelectorAll(".acarousel-image");

const atotalImages = Object.keys(aimages).length;

const aimageWidth = 30;

aright.addEventListener("click", () => {
    acarousel.classList.add("sliding-transition");

    aprevIndex = acurrentIndex;
    acurrentIndex = (acurrentIndex + 1) % atotalImages;

    acarousel.style.transform = `translateX(-${aimageWidth}%)`;
    
    setTimeout(() => {
        acarousel.appendChild(aimages[aprevIndex]);
        acarousel.classList.remove("sliding-transition");
        acarousel.style.transform = "";
    }, 500);
});

aleft.addEventListener("click", () => {
    aprevIndex = acurrentIndex;
    acurrentIndex = (acurrentIndex - 1 + atotalImages) % atotalImages;

    acarousel.style.transform = `translateX(-${aimageWidth}%)`;
    acarousel.insertBefore(aimages[acurrentIndex], acarousel.firstChild);
    
    setTimeout(() => {
        acarousel.style.transform = "";
        acarousel.classList.add("sliding-transition");
    }, 10);

    setTimeout(() => {
        acarousel.classList.remove("sliding-transition");
    }, 490);
});