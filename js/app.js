/* HAMBURGER MENU BUTTON */
const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('.nav__mobile-btn');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!isMenuOpen) {
        menu.classList.add('open');
        menuBtn.classList.add('open');
        isMenuOpen = true;
    } else {
        menu.classList.remove('open');
        menuBtn.classList.remove('open');
        isMenuOpen = false;
    }
});