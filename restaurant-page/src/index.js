import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const content = document.querySelector("#content");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadHome();
});

menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenu();
});

contactBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadContact();
});

loadHome();