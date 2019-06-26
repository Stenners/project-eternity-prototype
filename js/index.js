const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navigation");
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("is-active");
});
