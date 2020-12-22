const plane1 = document.querySelector(".head--plane1"),
    galleryVideo = document.querySelector("#gallery__background--video"),
    galleryElements = document.querySelectorAll(".gallery__box--gallery-element"),
    loadingScreen = document.querySelector(".loading");
let plane = 1,
    gallery = 3;

loadingScreen.style.display = "block";
window.onload = function () {
    setTimeout(function () {
        gsap.fromTo(loadingScreen, {opacity: 1}, {opacity: 0, duration: 0.29});
        gsap.to(loadingScreen, {visibility: 'hidden', delay: 0.29});
    }, 800);
}

setInterval(function planeImage() {
    plane++;
    if (plane >= 3) plane = 1;
    plane1.style.opacity = 0;
    setTimeout(() => {
        plane1.src = "src/assets/images/plane" + plane + ".webp";
        plane1.style.opacity = 1;
    }, 200);
}, 10000);

function visibility (index, element) {
    element.parentElement.parentElement.style.opacity = index;
}

setInterval(function galleryFnc () {
    galleryElements.forEach(function (element) {
        element.setAttribute("class", "gallery__box--gallery-element unactive");
    });
    document.getElementById("g" + gallery).setAttribute("class", "gallery__box--gallery-element active");
    gallery++;
    if (gallery >= galleryElements.length + 1) gallery = 1;
}, 10000);

const animationOpacityMove = document.querySelectorAll(".animation__opacity-move");

animationOpacityMove.forEach(element => {
    gsap.fromTo(element, {y: '-=20', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 0.29, scrollTrigger: {
        trigger: element,
        start: '70% bottom'
    }});
});
