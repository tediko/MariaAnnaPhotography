/* HAMBURGER MENU BUTTON */
const menuBtn = document.querySelector('.nav__mobile-btn');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!isMenuOpen) {
        menuBtn.classList.add('open');
        isMenuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        isMenuOpen = false;
    }
});