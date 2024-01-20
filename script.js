// Mobile Nav
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".main-nav-link");
navLinks.forEach((nav) => {
  nav.addEventListener("click", function () {
    header.classList.toggle("nav-open");
    console.log(`clicked ${nav.textContent}`);
  });
});

//Reveal Section
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

const slider = document.querySelector(".slider");

const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const slides = document.querySelectorAll(".slide");
const maxSlide = slides.length;
let curSlide = 0;

const goToSlide = function (s) {
  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${100 * (curSlide - index)}%)`;
  });
};

goToSlide(0);

const prevSlide = function () {
  if (curSlide == maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  console.log(curSlide);
};

const nextSlide = function () {
  if (curSlide == 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  console.log(curSlide);
};
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
