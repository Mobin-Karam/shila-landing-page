const loginButton = document.getElementById("login-button");
const modalBox = document.getElementById("modal");
const modalBoxSmall = document.getElementById("modal-small");
const exitModal = document.getElementById("exit-modal");
const mobileInput = document.getElementById("mobile");
const mobileLabel = document.getElementById("mobile-label");



// Mobile Input =====================================

let mobinInputValue = mobileInput.value.replace(/\s/g, "");

mobileInput.addEventListener("focusin", () => {
  mobileLabel.style.top = "-10px";
  mobileLabel.style.color = "#000";
});

if (mobileInput.value.length === 0) {
  mobileInput.addEventListener("focusout", () => {
    mobileLabel.style.top = "14px";
    mobileLabel.style.color = "#c7c7c7";
  });
  console.log("is 0");
}
if (!(mobileInput.value.length === 0)) {
  mobileLabel.style.top = "-10px";
  console.log("not 0");
}

console.log(mobinInputValue.length);
