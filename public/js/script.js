// navbarfixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const navfixed = header.offsetTop;

  if (window.pageYOffset > navfixed) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navLink = document.querySelector("#nav-link");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navLink.classList.toggle("hidden");
});

// dark mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// contact alert close
const closeAlert = document.querySelector(".contact-alert");

closeAlert.addEventListener("click", function () {
  closeAlert.classList.toggle("hidden");
});
