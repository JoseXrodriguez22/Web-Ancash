window.addEventListener("scroll", () => {
  var nav = document.querySelector("nav");
  nav.classList.toggle("active", window.scrollY > 0);
});
