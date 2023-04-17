let navUl = document.getElementById("ul-item");
let burgerBar = document.getElementById("burgerBar");

burgerBar.addEventListener("click", function () {
  navUl.classList.toggle("toggleulNavigation");
  burgerBar.classList.toggle("activeBurgerbar");
});