"use strict";
const menu = document.querySelector(".nav-menu");
const dropdown = document.querySelector(".dropdown");
const hideit = document.querySelector(".hideit");

function drop() {
    dropdown.classList.toggle("hideit");
}
menu.addEventListener("click", drop);