
const preloader = document.querySelector('[data-preloader]');

window.addEventListener('load', () => {
    preloader.classList.add('remove');
});



// add event on multiple elements

const addEventOnElement = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
        }
}

// Navbar toggler for mobile

const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector('[data-overlay]');


const toggleNav = function () {
    overlay.classList.toggle('active');
    navbar.classList.toggle('active');
    navTogglers.classList.toggle('active');
    document.body.classList.toggle('nav-active');
};

addEventOnElement(navTogglers, "click", toggleNav);

// Header

const header = document.querySelector('[data-header]');

window.addEventListener('scroll', function () { 
    header.classList[window.scrollY > 100 ? 'add' : 'remove']("active");
})




// LLLLLLLLL

// Save scroll position
function saveScrollPosition() {
    localStorage.setItem('scrollPosition', window.scrollY);
}

// Restore scroll position
function restoreScrollPosition() {
    const scrollPosition = localStorage.getItem('scrollPosition');
    window.scrollTo(0, scrollPosition);
    localStorage.removeItem('scrollPosition');
}

// Event listener for before page reload
window.addEventListener('beforeunload', saveScrollPosition);

// Event listener for after page reload
window.addEventListener('load', restoreScrollPosition);





