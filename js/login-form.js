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
