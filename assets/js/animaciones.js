document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".method-feature");

    function revealFeatures() {
        const triggerBottom = window.innerHeight * 0.85;

        features.forEach(feature => {
            const featureTop = feature.getBoundingClientRect().top;

            if (featureTop < triggerBottom) {
                feature.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealFeatures);
    revealFeatures(); // Llamamos a la función en caso de que ya estén visibles al cargar
});



document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".why-us-item");

    function revealElements() {
        const triggerBottom = window.innerHeight * 0.85;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealElements);
    revealElements(); // Activa elementos ya visibles al cargar
});


document.addEventListener("DOMContentLoaded", function () {
    const courses = document.querySelectorAll(".course-row");

    function revealCourses() {
        const triggerBottom = window.innerHeight * 0.8;

        courses.forEach(course => {
            const courseTop = course.getBoundingClientRect().top;

            if (courseTop < triggerBottom) {
                course.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealCourses);
    revealCourses();
});

