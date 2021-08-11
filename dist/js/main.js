console.log("loaded js");

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('nav');
const menu = document.querySelector('.nav-menu');
console.log(menu);

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        console.log('opening');
        hamburger.classList.add('open');
        nav.classList.add('open');
        menu.classList.add('open');
        showMenu = true;

    } else {
        console.log('close');
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menu.classList.remove('open');
        showMenu = false;

    }
}