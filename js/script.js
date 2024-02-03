// import api from "./api.js";

let response = await fetch(
  "https://restaurant.delino.com/restaurant/menu/00b99096-3dca-41dd-ae68-61265cafd5ca"
);

let json;

if (response.ok) {
  // if HTTP-status is 200-299
  // get the response body (the method explained below)
  json = await response.json();
} else {
  console.log("HTTP-Error: " + response.status);
}

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

let mainCenterBox;
let mainCenterBoxTop;
let mainCenterBoxInner = `
<div class="inner">
<div class="box" id="box1">
  <div class="box-image">
    <div class="overlay">
      <p>
        پیتزا مخلوط 23+ چیکن چیز ژامبوپلاس+ استرامبولی استیک
        پنیری+3 عدد نوشابه
      </p>
    </div>
  </div>
  <div class="box-image-content">
    <p class="image-des">
      مخلوط23+چیکن چیزژامبو+استرامبولی استیک+3ن...
    </p>
    <div>
      <div class="price">۴۰۵,۰۰۰</div>
      <button class="addto-cart">+</button>
    </div>
  </div>
</div>
</div>`;

for (let i = 0; i < json.categories.length; i++) {
  const element = json.categories[i].sub[0].food;
  json.categories[i].sub[0].food.forEach((typeFood) => {
    mainCenterBox = ` <div class="main__content__items__center__box--types">
                          <div class="top">
                            <button class="share-button">Copy</button>
                            <h2 class="title">${typeFood[i].title}</h2>
                          </div>
                          <div class="inner">
                            <div class="box" id="box1">
                            <div class="overlay">
                            <div class="box-image" style="background-image: url(${typeFood[
                              i
                            ].img.forEach((element) => {
                              element.img.replace("#SIZEOFIMAGE#", "560x350");
                            })});">
                            پیتزا مخلوط 23+ چیکن چیز ژامبوپلاس+ استرامبولی استیک
                            پنیری+3 عدد نوشابه
                            <p>
                            </p>
                            </div>
                            </div>
                            <div class="box-image-content">
                            <p class="image-des">
                            مخلوط23+چیکن چیزژامبو+استرامبولی استیک+3ن...
                            </p>
                            <div>
                            <div class="price">${typeFood.price}</div>
                            <button class="addto-cart">+</button>
                           </div>
                         </div>
                        </div>
                      </div>
                    </div>`;
  });

  document
    .querySelector(".main__content__items__center")
    .insertAdjacentHTML("beforeend", mainCenterBox);
  // mainCenterBox;
  console.log(element);
}

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
