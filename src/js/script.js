  
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.menu__overlay');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const menuLink = document.querySelector('.menu__link');

const closeHandler = () => {
    menu.classList.remove('active');
}

hamburger.addEventListener('click', () => {
menu.classList.add('active');
});

closeElem.addEventListener('click', closeHandler);

overlay.addEventListener('click', closeHandler);

menuLink.addEventListener('click', closeHandler);

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML; 
});