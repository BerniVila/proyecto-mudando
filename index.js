
// language selector

const bodyLang = document.querySelector('body');
const englishSelector = document.querySelector('.lang-selector-en');
const spanishSelector = document.querySelector('.lang-selector-es');
// const langSelector = document.querySelector('.lang-selector');

function toSpanish(e) {
  if (bodyLang.getAttribute('lang') === 'en') {
    bodyLang.setAttribute('lang', 'es');
  }
}

function toEnglish(e) {
  if (bodyLang.getAttribute('lang') === 'es') {
    bodyLang.setAttribute('lang', 'en');
  }
}



englishSelector.addEventListener('click', toEnglish);
spanishSelector.addEventListener('click', toSpanish);


// responsive burger menu


const burgerIcon = document.querySelector('.burger');
const burgerBar = document.querySelector('.nav-bar-top');
const burgerLine1 = document.getElementById('line-1');
const burgerLine2 = document.getElementById('line-2');
const burgerLine3 = document.getElementById('line-3');
let isBurgerOpen = false;


burgerIcon.addEventListener("click", function() {
if (!isBurgerOpen) {
  burgerLine1.classList.add('burger-open-1');
  burgerLine2.classList.add('burger-open-2');
  burgerLine3.classList.add('burger-open-3');
  burgerBar.classList.add('top-bar-rise');
  isBurgerOpen = true;
} else {
  burgerLine1.classList.remove('burger-open-1');
  burgerLine2.classList.remove('burger-open-2');
  burgerLine3.classList.remove('burger-open-3');
  burgerBar.classList.remove('top-bar-rise');
  isBurgerOpen = false;
}
});