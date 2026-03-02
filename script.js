const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const cartCount = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-to-cart");

let cartItems = 0;

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartItems += 1;
    cartCount.textContent = String(cartItems);
    button.textContent = "Lisätty ✓";
    setTimeout(() => {
      button.textContent = "Lisää koriin";
    }, 800);
  });
});
