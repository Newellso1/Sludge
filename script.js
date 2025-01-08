const navBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-links");
const logo = document.getElementById("logo");
const ham1 = document.getElementById("hm-1");
const ham2 = document.getElementById("hm-2");
const ham3 = document.getElementById("hm-3");

navBtn.addEventListener("click", function () {
  if (navLinks.classList.contains("nav-links-mobile-in")) {
    navLinks.classList.remove("nav-links-mobile-in");
    navLinks.classList.add("nav-links-mobile-out");
    logo.classList.remove("logo-out");
    logo.classList.add("logo-in");
    ham1.classList.remove("ham-1");
    ham2.classList.remove("ham-2");
    ham3.classList.remove("ham-3");
  } else {
    navLinks.classList.add("nav-links-mobile-in");
    navLinks.classList.remove("nav-links-mobile-out");
    logo.classList.remove("logo-in");
    logo.classList.add("logo-out");
    ham1.classList.add("ham-1");
    ham2.classList.add("ham-2");
    ham3.classList.add("ham-3");
  }
});
