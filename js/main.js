const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  searchBox.classList.toggle("open");
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
