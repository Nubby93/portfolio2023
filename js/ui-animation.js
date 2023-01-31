const hero = document.querySelector(".hero");
const title = document.querySelector(".hero__title");
const image = document.querySelector(".hero__image");
const buttonText = document.querySelector(".hero .button span");
const menuToggle = document.querySelector(".menu-toggle");
const cart = document.querySelector(".cart");
const logo = document.querySelector(".logo");

const setInitialStates = () => {
  gsap.set(title, {
    autoAlpha: 1 });


  gsap.set(split.lines, {
    y: 40,
    autoAlpha: 0 });


  gsap.set(buttonText, {
    x: "-50%",
    y: "50%" });


  gsap.set([logo, cart, menuToggle], {
    y: -80,
    autoAlpha: 0 });

};

const flipAnimation = () => {
  const state = Flip.getState(image);

  hero.appendChild(image);

  const tl = Flip.from(state, {
    duration: 2,
    ease: "power3.inOut" });


  return tl;
};

const master = gsap.timeline({
  delay: 0.5,
  defaults: {
    ease: "power3.inOut" } });



const split = new SplitText(title, {
  type: "lines" });


const animateTitle = () => {
  const tl = gsap.timeline();

  tl.to(split.lines, {
    y: 0,
    autoAlpha: 1,
    duration: 2.5,
    stagger: 0.3 });


  return tl;
};

const animateImage = () => {
  const tl = gsap.timeline();

  tl.to(image, {
    borderRadius: "10px",
    duration: 1 });


  return tl;
};

const animateButton = () => {
  const tl = gsap.timeline();

  tl.to(
  ".hero .button",
  {
    scale: 1,
    duration: 1 },

  "-=2.8").

  to(
  ".hero .button",
  {
    width: "200px",
    duration: 2 },

  "<").

  to(
  buttonText,
  {
    opacity: 1 },

  "-=2").

  to(
  buttonText,
  {
    y: "-50%",
    duration: 1.5 },

  "<");


  return tl;
};

const animateMenuItems = () => {
  const tl = gsap.timeline({
    defaults: {
      duration: 2.5,
      y: 0,
      autoAlpha: 1,
      ease: "power3.inOut" } });



  tl.to([cart, menuToggle], {}).to(logo, {}, "-=2.3");

  return tl;
};

master.
add(setInitialStates()).
add(flipAnimation()).
add(animateImage(), "<").
add(animateMenuItems(), "-=1.8").
add(animateTitle(), "-=2").
add(animateButton(), "-=2");

/*
GSDevTools.create({
    animation: master,
    paused: true,
    css: {
        zIndex: 10
    }
});
*/