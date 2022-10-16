const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    e.preventDefault();
    const goto = elem.hasAttribute("href") ? elem.getAttribute("href") : "body";
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

let scrollInp = document.querySelector(".scroll");
let scrollText = document.querySelector(".scroll_text");

scrollText.addEventListener("scroll", () => {
  scrollInp.value = scrollText.scrollTop;
});

scrollInp.addEventListener("input", () => {
  scrollText.scrollTop = scrollInp.value;
});

let ulSlide = document.querySelector(".ul_slide");
let butLeft = document.querySelector(".but_left");
let butRight = document.querySelector(".but_right");
let circle2 = document.querySelector(".circle_2");
console.log(ulSlide);

butRight.addEventListener("click", () => {
  ulSlide.scrollLeft = 548;
  circle2.style.background = "#ff6a9f";
});
butLeft.addEventListener("click", () => {
  ulSlide.scrollLeft = 0;
  circle2.style.background = "#ff6a9e00";
});

let openSec = document.querySelector(".open");
let closeSec = document.querySelector(".close");
let section3 = document.querySelector(".section_3");
let clickWind = document.querySelector(".click_window");

openSec.addEventListener("click", () => {
  clickWind.style = "display:flex;";
  section3.style = 'background-image: url("./img/bg_sect_3.png");';
});

closeSec.addEventListener("click", () => {
  clickWind.style = "display: none;";
  section3.style = ' background-image: url("./img/bg3.png");';
  console.log(1);
});

let sectionMain = document.querySelector(".main");
let spermImg = document.querySelector(".sperm_anim");

sectionMain.addEventListener("scroll", () => {
  console.log(sectionMain.scrollLeft);
  if (sectionMain.scrollLeft >= 1024) {
    spermImg.style = "animation-name: sec_2_img;opacity: 1;";
  }
});
