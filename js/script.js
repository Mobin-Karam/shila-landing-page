const loginButton = document.getElementById("login-button");
const modalBox = document.getElementById("modal");
const modalBoxSmall = document.getElementById("modal-small");
const exitModal = document.getElementById("exit-modal");
const mobileInput = document.getElementById("mobile");
const mobileLabel = document.getElementById("mobile-label");

// Modal Login Form =========================
// If window Width < 900 Show this
if (window.innerWidth < 900) {
  // Login Button
  loginButton.addEventListener("click", () => {
    modalBoxSmall.style.animation = "popup 0.6s ease-in-out 0s 1 alternate";
    modalBox.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
  // Exit Button From Login Form
  exitModal.addEventListener("click", () => {
    modalBoxSmall.style.animation = "popdown 0.6s ease-in-out 0s 1 alternate";
    setTimeout(() => {
      modalBox.style.display = "none";
    }, 600);
    document.body.style.removeProperty("overflow");
  });

  // If window Width > 900 Show this
} else if (window.innerWidth >= 900) {
  // Login Button
  loginButton.addEventListener("click", () => {
    modalBoxSmall.style.animation = "popup 0.6s ease-in-out 0s 1 alternate";
    modalBox.style.display = "block";
    document.body.style.overflow = "hidden";
  });
  // Exit Button From Login Form
  exitModal.addEventListener("click", () => {
    modalBoxSmall.style.animation = "popdown 0.3s ease-in-out 0s 1 alternate";
    setTimeout(() => {
      modalBox.style.display = "none";
    }, 300);
    document.body.style.removeProperty("overflow");
  });
  // Exit with CLick on Out Side of Login Form
  modalBox.addEventListener("click", () => {
    modalBox.style.display = "none";
  });
}

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
