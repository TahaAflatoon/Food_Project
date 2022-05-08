// JQuery
$.noConflict()
jQuery(document).ready(function($) {
    // Side menu buttons
    $('.foods_btn').on('click', () => {
        $('.sideMenu_foodsList').slideToggle(500);
    })
})

// JavaScript
// Side menu width
const bars = document.querySelector('.bars');
const side_menu = document.querySelector('.side_menu');
const close_btn = document.querySelector('.close_btn');

bars.addEventListener('click', () => {
    side_menu.style.width = '75%';
});
close_btn.addEventListener('click', () => {
    side_menu.style.width = '0';
});