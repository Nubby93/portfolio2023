const SIDEBAR = document.querySelector(".sticky-sidebar__nav");
const TRIGGER = document.querySelector(".sticky-sidebar__content");
const END_TRIGGER = document.querySelector(".sticky-sidebar__item:last-child");
const LINK_TRIGGERS = [...document.querySelectorAll(".sticky-sidebar__link")];
const CONTENT_ITEMS = [...document.querySelectorAll(".sticky-sidebar__item")];

const getVh = () => {
  const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0);

  return vh;
};

ScrollTrigger.create({
  trigger: TRIGGER,
  start: "top center",
  end: "bottom bottom",
  pin: SIDEBAR,
  pinSpacing: false });


CONTENT_ITEMS.forEach((content, index) => {
  ScrollTrigger.create({
    trigger: content,
    start: "top center",
    end: "bottom center",
    toggleClass: {
      targets: LINK_TRIGGERS[index],
      className: "is-active" } });


});