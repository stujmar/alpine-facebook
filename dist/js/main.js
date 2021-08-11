console.log("loaded js");

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('nav');
const navMenu = document.querySelector('nav-menu');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        navMenu.classList.add('open');
        showMenu = true;

    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        navMenu.classList.remove('open');
        showMenu = false;

    }
}