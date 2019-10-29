// Your code goes here
const logoTop = document.querySelector(".top-logo")

logoTop.addEventListener("mouseenter", () => {
    logoTop.style.transform = "scale(1.5)";
    logoTop.style.transition = "all 0.2s"
})

logoTop.addEventListener("mouseleave", () => {
    logoTop.style.transform = "scale(1)";
    logoTop.style.transition = "all 0.2s"
})

document.querySelectorAll(".img-content").forEach(el => {
    el.addEventListener("click", () => {
    el.style.transform = "scale(.9)";
    el.style.transition = "all 0.2s"
    })
})

const bottomImg = document.querySelector(".bottom-img")

bottomImg.addEventListener("mouseover", () => {
    bottomImg.style.transform = "scale(1.3)";
    bottomImg.style.transition = "all 0.2s"
})

bottomImg.addEventListener("mouseout", () => {
    bottomImg.style.transform = "scale(1)";
    bottomImg.style.transition = "all 0.3s"
})

const funBus = document.querySelector(".logo-heading");

window.addEventListener("resize", () => {
   funBus.textContent = "Fun Bus!"
})

window.addEventListener("scroll", () => {
    body.style.backgroundColor = "green";
})

const welcome = document.querySelector(".welcome");

    welcome.addEventListener("mousedown",() => {
    welcome.style.backgroundColor = "blue";
})

welcome.addEventListener("mouseup",() => {
    welcome.style.backgroundColor = "";
})

const body = document.querySelector("body");

body.addEventListener("dblclick", (event) => {
 body.style.backgroundColor="orange";
  console.log("end")
  event.stopPropagation();
})

const Content = document.querySelector(".content-section");

Content.addEventListener('click', (event) => {
  Content.style.backgroundColor="purple";
  console.log("middle")
})

const textContent = document.querySelector(".text-content");

textContent.addEventListener('click', (event) => {
  textContent.style.backgroundColor="yellow";
  console.log("start")
  console.log(event);
  event.stopPropagation();
})

const stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", (event) => {
  console.log("stopped the link");
  event.preventDefault();
})