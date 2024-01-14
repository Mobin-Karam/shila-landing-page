const loginButton = document.getElementById("login-button");
const modalBox = document.getElementById("modal");
const modalBoxSmall = document.getElementById("modal-small");
const exitModal = document.getElementById("exit-modal");

if (window.innerWidth < 900) {
  // Login Button
  loginButton.addEventListener("click", () => {
    modalBox.style.animation = "popup 0.6s ease-in-out 0s 1 alternate";
    modalBox.style.display = "block";
  });
  // Exit Button From Login Form
  exitModal.addEventListener("click", () => {
    modalBox.style.animation = "popdown 0.6s ease-in-out 0s 1 alternate";
    setTimeout(() => {
      modalBox.style.display = "none";
    }, 600);
  });
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

console.log(window.innerWidth < 900);


// api 
