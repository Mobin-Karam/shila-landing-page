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
  });
  // Exit Button From Login Form
  exitModal.addEventListener("click", () => {
    modalBoxSmall.style.animation = "popdown 0.6s ease-in-out 0s 1 alternate";
    setTimeout(() => {
      modalBox.style.display = "none";
    }, 600);
  });

  // If window Width > 900 Show this
} else if (window.innerWidth >= 900) {
  // Login Button
  loginButton.addEventListener("click", () => {
    modalBoxSmall.style.animation = "popup 0.6s ease-in-out 0s 1 alternate";
    modalBox.style.display = "block";
  });
  // Exit Button From Login Form
  exitModal.addEventListener("click", () => {
    modalBoxSmall.style.animation = "popdown 0.3s ease-in-out 0s 1 alternate";
    setTimeout(() => {
      modalBox.style.display = "none";
    }, 300);
  });
}

// Mobile Input =====================================
mobileInput.addEventListener("focusin", () => {
  mobileLabel.style.top = "-10px";
});


