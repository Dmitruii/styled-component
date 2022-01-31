'use strict'

// animation header burger 
const headerBurgerElem = document.querySelector('.header_burger');
const bodyElem = document.querySelector('body');
const headerNavBarElem = document.querySelector('.header__nav-bar');

headerBurgerElem.addEventListener('click', toggleClassHeaderBurger);

function toggleClassHeaderBurger () {
  headerBurgerElem.classList.toggle('active');
  bodyElem.classList.toggle('lock');
  headerNavBarElem.classList.toggle('active');
}