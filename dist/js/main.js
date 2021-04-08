//Selecting DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set menu state
        showMenu = false;
    }
}


// Modals with images
const projectImg = document.querySelectorAll('.projects__img');

// Add event listener for every image
projectImg.forEach(project => project.addEventListener('click', showModal))

// Add event listener for clicks outside modal
window.addEventListener('click', clickOutside);

// func to show modal based on which image is clicked
function showModal(e) {
    e.target.classList.add('modal');
}

// func to close modal if clicked outside of modal
function clickOutside(e) {
        if(!e.target.closest('.projects__img')) {
            projectImg.forEach(image => image.classList.remove('modal'));
            
    }  
}
