var navMain = document.querySelector(".main-nav");
var navToggle = navMain.querySelector(".main-nav__toggle");

navMain.classList.toggle("main-nav--closed");

navToggle.addEventListener("click", function() {
  navMain.classList.toggle("main-nav--closed");
  navMain.classList.toggle("main-nav--opened");
});
