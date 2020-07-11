'use strict';

(function () {
  var menu = document.querySelector('.header__navigation');
  var menuToggle = document.querySelector('.navigation__button-toggle');
  var telInput = document.querySelector('.booking__input-field[type="tel"]');

  if (menu) {
    menu.classList.remove('navigation--open');

    menuToggle.onclick = function () {
      if (menu.classList.contains('navigation--open')) {
        menu.classList.remove('navigation--open');
      } else {
        menu.classList.add('navigation--open');
        menuToggle.style.opacity = '1';
      }
    };
  }

  if (telInput) {
    telInput.onkeyup = function () {
      telInput.value = telInput.value.replace(/[^\d]/g, '');
    };
  }
})();
