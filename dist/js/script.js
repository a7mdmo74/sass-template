const navBtn = document.querySelector(".nav-menu");
const nav = document.querySelector("#top-list");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("toggle-nav");
});
