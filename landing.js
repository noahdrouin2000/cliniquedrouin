//yoyo icons
const tl = gsap.timeline({ defaults: { duration: 0.75 } });

tl.fromTo("#clock, #map", { y: 0 }, { y: -8, yoyo: true, repeat: -1 });

tl.fromTo(
  "#dentist-tools",
  { y: 0 },
  { y: -8, yoyo: true, repeat: -1, delay: 0.3 },
  "<"
);

tl.fromTo("#tooth-img", { y: 0 }, { y: -8, yoyo: true, repeat: -1 }, "<");
tl.fromTo("#dentist-chair", { y: 0 }, { y: -8, yoyo: true, repeat: -1 }, "<");
tl.fromTo("#teeth-img", { y: 0 }, { y: -8, yoyo: true, repeat: -1 }, "<");

//Selectors

const loadingBar = document.querySelector(".loading-bar");
const body = document.querySelector("body");
const firstSect = document.querySelector(".first-sect");
const links = document.querySelector(".links-burger");

//Event Listeners

window.addEventListener("scroll", animateProgressBar);
window.addEventListener("click", burgerMenu);

//Functions

function animateProgressBar() {
  let scrollDistance = -body.getBoundingClientRect().top;
  let scrollPercentage = Math.floor(
    (scrollDistance /
      (body.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
      100
  );
  loadingBar.style.width = scrollPercentage + "%";
}

animateProgressBar();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
