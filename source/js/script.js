var navMain = document.querySelector(".main-nav");
var navToggle = navMain.querySelector(".main-nav__toggle");
var comments = document.querySelector(".comments");
var arrowRight = comments.querySelector(".comments__arrow--right");
var arrowLeft = comments.querySelector(".comments__arrow--left");

navMain.classList.toggle("main-nav--closed");

navToggle.addEventListener("click", function() {
  navMain.classList.toggle("main-nav--closed");
  navMain.classList.toggle("main-nav--opened");
});

arrowRight.addEventListener("click", function() {
  // Your code here
  // console.log("Right");
});

arrowLeft.addEventListener("click", function() {
  // Your code here
  // console.log("Left");
});
