
"use strict";

// Variable declarations
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const currentYear = document.getElementById("currentYear");
const navLinks = document.querySelectorAll("#navMenu a");

let menuIsOpen = false;

// Update the footer year automatically
currentYear.textContent = new Date().getFullYear();

// Toggle the mobile navigation menu
menuToggle.addEventListener("click", function () {
    menuIsOpen = !menuIsOpen;

    navMenu.classList.toggle("open", menuIsOpen);
    menuToggle.setAttribute("aria-expanded", String(menuIsOpen));
    menuToggle.textContent = menuIsOpen ? "✕" : "☰";
});

// Close the menu after selecting a navigation link
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menuIsOpen = false;

        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});
