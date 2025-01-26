const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Alternar visibilidad del menú y estado del ícono
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});
