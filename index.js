
// language selector
// let inEnglish = false;
// const actualLang = localStorage.getItem("bodyLang");


const bodyLang = document.querySelector('body');
const englishSelector = document.querySelector('.lang-selector-en');
const spanishSelector = document.querySelector('.lang-selector-es');


function toSpanish(e) {
  if (bodyLang.getAttribute('lang') === 'en') {
    bodyLang.setAttribute('lang', 'es');
    inEnglish = false;
  }
}

function toEnglish(e) {
  if (bodyLang.getAttribute('lang') === 'es') {
    bodyLang.setAttribute('lang', 'en');
    inEnglish = true;
  }
}



englishSelector.addEventListener('click', toEnglish);
spanishSelector.addEventListener('click', toSpanish);


// language watcher

// window.onload = function() {

//   if(typeof(Storage) !== "undefined"){

//      localStorage.setItem("lang", bodyLang.getAttribute('lang'));

     
// if (actualLang === 'en') {
//   bodyLang.setAttribute("lang", actualLang);
// }


//    }
 
// };

//CONTACT FORM

const contactForm = document.querySelector('.contact-form');
const contactButton = document.querySelector('.contact-button');
let isFormVisible = false;

function setVisible() {
  if (isFormVisible) {
    contactForm.style.display = 'none';
    contactForm.style.visibility = 'hidden';
    contactForm.style.height = 0;
    contactForm.style.transformation = 'translateY(-50)';
    isFormVisible = false;
  } else {
    contactForm.style.display = 'flex';
    contactForm.style.visibility = 'visible';
    contactForm.style.height = 50 + 'rem';
    contactForm.style.transformation = 'translateY(50)';
    isFormVisible = true;
  }
  // contactForm.style.display = 'flex';
  // contactForm.style.visibility = 'visible';
  // contactForm.style.height = 50 + 'rem';
  // contactForm.style.transformation = 'translateY(50)';
  // isFormVisible = true;
}

contactButton.addEventListener('click', setVisible);



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



// parallax effect

const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', function() {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * (-0.5) + 'px';
});