const navBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-links");
const logo = document.getElementById("logo");

navBtn.addEventListener("click", function () {
  if (navLinks.classList.contains("nav-links-mobile-in")) {
    navLinks.classList.remove("nav-links-mobile-in");
    navLinks.classList.add("nav-links-mobile-out");
    logo.classList.remove("logo-out");
    logo.classList.add("logo-in");
  } else {
    navLinks.classList.add("nav-links-mobile-in");
    navLinks.classList.remove("nav-links-mobile-out");
    logo.classList.remove("logo-in");
    logo.classList.add("logo-out");
  }
});
