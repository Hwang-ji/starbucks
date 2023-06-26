// show menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach(n => n.addEventListener("click", linkAction));

// 스크롤 내리면 header 색상변경
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

// scrollup button
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUpBtn.classList.add("show-scroll")
    : scrollUpBtn.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// scroll sections active link
const sections = document.querySelectorAll("section[id]");
// console.log(sections);
const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    sectionsClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// PARALLAX
let parallax = new Rellax(".parallax");

//GSAP
gsap.from(".home__coffee", 1.2, { opacity: 0, y: 100, delay: 0.1 });
gsap.from(".home__star-1", 1.2, {
  delay: 1.3,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
gsap.from(".home__star-2", 1.2, {
  delay: 1.4,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
gsap.from(".home__star-3", 1.2, {
  delay: 1.5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
gsap.from(".home__mountain-2", 1.2, { opacity: 0, x: 150, delay: 0.5 });
gsap.from(".home__mountain-3", 1.2, { opacity: 0, x: -150, delay: 0.6 });
gsap.from(".home__mountain-1", 1.2, { opacity: 0, y: 250, delay: 0.7 });
gsap.from(".home__trineo", 1.2, { opacity: 0, x: -200, delay: 0.8 });
gsap.from(".home__title1", 1.2, { opacity: 0, y: -60, delay: 1 });
gsap.from(".home__title2", 1.2, { opacity: 0, y: -60, delay: 1 });

//scroll reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.about__data, .goods__img`, { origin: "right" });
sr.reveal(`.about__img, .goods__data`, { origin: "left" });
sr.reveal(`.menu__card`, { interval: 100 });
sr.reveal(`.footer`);
