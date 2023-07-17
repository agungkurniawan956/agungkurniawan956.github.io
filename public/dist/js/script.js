// navbarfixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const navfixed = header.offsetTop;

  if (window.pageYOffset > navfixed) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// hamburger
const hamburger = document.querySelector('#hamburger');
const navLink = document.querySelector('#nav-link');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navLink.classList.toggle('hidden');
});
