// import api from "./api.js";

// let response = await fetch(
//   "https://restaurant.delino.com/restaurant/menu/00b99096-3dca-41dd-ae68-61265cafd5ca"
// );

// let json;

// if (response.ok) {
//   // if HTTP-status is 200-299
//   // get the response body (the method explained below)
//   json = await response.json();
// } else {
//   console.log("HTTP-Error: " + response.status);
// }

// const foodTypes = json.categories.slice().map((obj) => {
//   let title = obj.title;
//   let foods = obj.sub[0].food;
//   let foodImg = obj.sub[0].food[0].img.replace("#SIZEOFIMAGE#", "560x350");

//   const boxType = (document.getElementById(
//     "box1"
//   ).style.backgroundImage = `url(${obj.sub[0].food[1].img.replace(
//     "#SIZEOFIMAGE#",
//     "560x350"
//   )})`);

//   return {
//     title: title,
//     foods: foods,
//     foodImg: foodImg,
//   };
// });

// console.log(foodTypes);
// console.log(json.categories);

// Main Content Change with Nav
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

const box = document.querySelectorAll(".box");
let element = [];
for (let i = 0; i < box.length; i++) {
  element.push(box[i]);
  box[i].addEventListener("click", () => {});
}
