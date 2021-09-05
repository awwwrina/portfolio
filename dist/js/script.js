  
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.menu__overlay');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

const closeHandler = () => {
    menu.classList.remove('active');
}

hamburger.addEventListener('click', () => {
menu.classList.add('active');
});

closeElem.addEventListener('click', closeHandler);

overlay.addEventListener('click', closeHandler);