// Selección de elementos para el menú
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

// Lógica del carrusel de testimonios
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const indicators = document.querySelectorAll('.indicator');

let currentSlideIndex = 0;

// Inicializar carrusel: solo el primer slide visible
testimonialSlides.forEach((slide, index) => {
    slide.style.opacity = index === 0 ? "1" : "0";
    slide.style.display = index === 0 ? "block" : "none";
});

// Función para cambiar de testimonio con animación
function updateSlides(direction) {
    const currentSlide = testimonialSlides[currentSlideIndex];
    let nextIndex;

    if (direction === 'next') {
        nextIndex = (currentSlideIndex + 1) % testimonialSlides.length;
        currentSlide.style.animation = "fadeOutLeft 0.5s forwards";
    } else if (direction === 'prev') {
        nextIndex = (currentSlideIndex === 0) ? testimonialSlides.length - 1 : currentSlideIndex - 1;
        currentSlide.style.animation = "fadeOutRight 0.5s forwards";
    }

    // Esperar la animación antes de cambiar de slide
    setTimeout(() => {
        testimonialSlides.forEach(slide => {
            slide.style.opacity = "0";
            slide.style.display = "none";
            slide.style.animation = ""; // Reset animación
        });

        // Mostrar el siguiente slide con animación
        const nextSlide = testimonialSlides[nextIndex];
        nextSlide.style.display = "block";
        nextSlide.style.opacity = "1";
        nextSlide.style.animation = (direction === 'next') ? "fadeInRight 0.5s forwards" : "fadeInLeft 0.5s forwards";

        currentSlideIndex = nextIndex;

        // Actualizar los indicadores
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlideIndex);
        });
    }, 500);
}

// Botones de navegación
arrowLeft.addEventListener('click', () => {
    updateSlides('prev');
});

arrowRight.addEventListener('click', () => {
    updateSlides('next');
});

// Agregar funcionalidad a los indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        if (index !== currentSlideIndex) {
            updateSlides(index > currentSlideIndex ? 'next' : 'prev');
        }
    });
});

// Rotación automática cada 8 segundos
setInterval(() => {
    updateSlides('next');
}, 8000);
