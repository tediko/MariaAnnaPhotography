/* STICKY NAV */
const nav = document.querySelector('.nav__container');

function navScroll(e) {
    const scrollY = window.scrollY;
    const navOffsetTop = nav.getBoundingClientRect().top;
    if (navOffsetTop == 0) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

document.addEventListener('scroll', navScroll);


/* HAMBURGER MENU BUTTON */
const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('.nav__mobile-btn');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!isMenuOpen) {
        menu.classList.add('open');
        menuBtn.classList.add('open');
        menu.classList.remove('close');
        isMenuOpen = true;
    } else {
        menu.classList.add('close');
        menu.classList.remove('open');
        menuBtn.classList.remove('open');
        isMenuOpen = false;
    }
});

/* TESTIMONIAL SLIDER */
const slides = document.querySelectorAll('.testimonial__slide');
const track = document.querySelector('.testimonial__sliderTrack');
const indicators = document.querySelectorAll('.testimonial__indicator');

slides.forEach((slide, idx) => { // set each slide position
    slide.style = `left: ${800 * idx}px`;
})

function slide(index, indicator) { //change slide translating X position
    track.style.transform = `translateX(-${index * 800}px)`;
    removeActive(); 
    indicator.classList.add('active'); //add active class to clicked indicator button
}

function removeActive() { // remove all active class from indicator buttons
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    })
}

indicators.forEach((indicator, idx) => {
    indicator.addEventListener('click', () => {
        slide(idx, indicator);
    })
})

/* VIDEO MODAL */
const playButton = document.querySelector('.video__button');
const modal = document.querySelector('.video__modal');
const overlay = document.querySelector('.overlay');

function openModal() {
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

playButton.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);