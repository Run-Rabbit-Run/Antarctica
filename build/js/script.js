'use strict';
let menu = document.querySelector('.navigation');
let menuToggle = document.querySelector('.navigation__button-toggle');

menu.classList.remove('navigation--open');

menuToggle.addEventListener('click', function () {
  if (menu.classList.contains('navigation--open')) {
    menu.classList.remove('navigation--open');
  } else {
    menu.classList.add('navigation--open');
  }
});
