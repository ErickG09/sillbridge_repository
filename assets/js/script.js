// Selección de elementos
const hamburger = document.querySelector('.hamburger');
const navLinksMobile = document.querySelector('.nav-links-mobile');
const closeIcon = document.querySelector('.close-icon');

// Abrir menú
hamburger.addEventListener('click', () => {
    navLinksMobile.classList.add('active');
    hamburger.classList.add('active');
});

// Cerrar menú
closeIcon.addEventListener('click', () => {
    navLinksMobile.classList.remove('active');
    hamburger.classList.remove('active');
});

// Cerrar menú al hacer clic en un enlace
navLinksMobile.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinksMobile.classList.remove('active');
        hamburger.classList.remove('active');
    }
});
