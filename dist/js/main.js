const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false; // so initially the menu is not shown

// we will add an even listener to the menu button
// we are going to listen for the click event
// and then we will toggle menu we'll call this functiion that we're going to create down here.
menuBtn.addEventListener('click', toggleMenu); 

function toggleMenu() {
    // if not show menu / if show menu is false
    // we are going to get that hamburger class
    // and we are going to target the class list
    // and we are going to add 'open'
    // so we're going to say that it's now open
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        // we'll use a high order array function will do for each
        // we're going to use an arrow function
        // we;re going to loop through items
        // we're going to pull each time we're going to pull one item out
        // so in the function, we'll say item.classList.add('open')
        navItems.forEach(item => item.classList.add('open'));

        // then we'll need to set our show menu to true
        // so now we know that the menu is open
        // and then put the else statement
        // so if the menu is open we want to do the opposite
        // and then we're also going to want to set our show menu, back to false
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}