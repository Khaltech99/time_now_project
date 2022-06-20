"use strict";
const menu = document.querySelector(".nav-menu");
const dropdown = document.querySelector(".dropdown");
const hideit = document.querySelector(".hideit");
// const navBorder = document.querySelector(".nav-border");

function drop() {
    dropdown.classList.toggle("hideit");
}

menu.addEventListener("click", drop);