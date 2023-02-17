//yoyo icons
const tl = gsap.timeline({ defaults: { duration: 0.75 } });

tl.fromTo("#clock, #map", { y: 0 }, { y: -8, yoyo: true, repeat: -1 });

//Selectors

const coverOne = document.getElementById("cover-one");
const coverTwo = document.getElementById("cover-two");
const coverThree = document.getElementById("cover-three");
const coverFour = document.getElementById("cover-four");
const coverFive = document.getElementById("cover-five");
const coverSix = document.getElementById("cover-six");
const coverSeven = document.getElementById("cover-seven");
const coverEight = document.getElementById("cover-eight");
const loadingBar = document.querySelector(".loading-bar");
const body = document.querySelector("body");
const firstSect = document.querySelector(".first-sect");

//Event Listeners

window.addEventListener("scroll", coverScroll);
window.addEventListener("scroll", animateProgressBar);
window.addEventListener("scroll", firstSectOpacity);

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

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let ticking = false;
function coverScroll() {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      let scrollPercentage =
        ((document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100;
      if (scrollPercentage >= 4.4 && scrollPercentage <= 13.35) {
        let scrollPercZero = scrollPercentage - 4.4;
        let coverMov = scrollPercZero * 11.173;
        coverOne.style.left = -coverMov + "%";
      }
      if (scrollPercentage > 13.35) {
        coverOne.style.left = "-59rem";
      }

      if (scrollPercentage >= 13.35 && scrollPercentage <= 22.3) {
        let scrollPercZero = scrollPercentage - 13.35;
        let coverMov = scrollPercZero * 11.173;
        coverTwo.style.right = -coverMov + "%";
      }
      if (scrollPercentage > 22.3) {
        coverTwo.style.right = "-59rem";
      }

      if (scrollPercentage >= 22.3 && scrollPercentage <= 31.25) {
        let scrollPercZero = scrollPercentage - 22.3;
        let coverMov = scrollPercZero * 11.173;
        coverThree.style.left = -coverMov + "%";
      }
      if (scrollPercentage > 31.25) {
        coverThree.style.left = "-59rem";
      }

      if (scrollPercentage >= 31.25 && scrollPercentage <= 40.2) {
        let scrollPercZero = scrollPercentage - 31.25;
        let coverMov = scrollPercZero * 11.173;
        coverFour.style.right = -coverMov + "%";
      }
      if (scrollPercentage > 40.2) {
        coverFour.style.right = "-59rem";
      }

      if (scrollPercentage >= 40.2 && scrollPercentage <= 49.15) {
        let scrollPercZero = scrollPercentage - 40.2;
        let coverMov = scrollPercZero * 11.173;
        coverFive.style.left = -coverMov + "%";
      }
      if (scrollPercentage > 49.15) {
        coverFive.style.left = "-59rem";
      }

      if (scrollPercentage >= 49.15 && scrollPercentage <= 58.1) {
        let scrollPercZero = scrollPercentage - 49.15;
        let coverMov = scrollPercZero * 11.173;
        coverSix.style.right = -coverMov + "%";
      }
      if (scrollPercentage > 58.1) {
        coverSix.style.right = "-59rem";
      }

      if (scrollPercentage >= 58.1 && scrollPercentage <= 67.05) {
        let scrollPercZero = scrollPercentage - 58.1;
        let coverMov = scrollPercZero * 11.173;
        coverSeven.style.left = -coverMov + "%";
      }
      if (scrollPercentage > 67.05) {
        coverSeven.style.left = "-59rem";
      }

      if (scrollPercentage >= 67.05 && scrollPercentage <= 76) {
        let scrollPercZero = scrollPercentage - 67.05;
        let coverMov = scrollPercZero * 11.173;
        coverEight.style.right = -coverMov + "%";
      }
      if (scrollPercentage > 76) {
        coverEight.style.right = "-59rem";
      }
    });
  }
}

function firstSectOpacity() {
  let scrollPercentage =
    ((document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100;
  if (scrollPercentage >= 0 && scrollPercentage <= 10.51) {
    let opacityLevel = 1 - (scrollPercentage * 9.52) / 100;
    firstSect.style.opacity = opacityLevel;
  }
}