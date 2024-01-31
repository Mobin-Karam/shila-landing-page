import api from "./api.js";

// API call
console.log(api());;

// Main Content Change wiht Nav
const menus = document.querySelectorAll(".menu");
menus[1].classList.add("active");

menus[0].addEventListener("click", () => {
  menus[1].classList.remove("active");
  menus[0].classList.add("active");
});

menus[1].addEventListener("click", () => {
  menus[0].classList.remove("active");
  menus[1].classList.add("active");
});
