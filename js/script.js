

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('active');
});


// const carousel = document.querySelector('.carousel');
// const prevBtn = document.querySelector('.carousel-btn.prev');
// const nextBtn = document.querySelector('.carousel-btn.next');

// let scrollAmount = 0;

// // Botón de navegación izquierda
// prevBtn.addEventListener('click', () => {
//     carousel.scrollBy({
//         left: -300, // Ajusta el desplazamiento
//         behavior: 'smooth',
//     });
// });

// // Botón de navegación derecha
// nextBtn.addEventListener('click', () => {
//     carousel.scrollBy({
//         left: 300, // Ajusta el desplazamiento
//         behavior: 'smooth',
//     });
// });


