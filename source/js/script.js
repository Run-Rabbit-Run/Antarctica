'use strict';
let menu = document.querySelector('.navigation');
let menuToggle = document.querySelector('.navigation__button-toggle');
let telInput = document.querySelector('.booking__input-field[type="tel"]');

menu.classList.remove('navigation--open');

menuToggle.addEventListener('click', function () {
  if (menu.classList.contains('navigation--open')) {
    menu.classList.remove('navigation--open');
  } else {
    menu.classList.add('navigation--open');
    menuToggle.style.display = "inline-block";
  }
});

telInput.addEventListener('keyup', function(){
  telInput.value = telInput.value.replace(/[^\d]/g, '');
});