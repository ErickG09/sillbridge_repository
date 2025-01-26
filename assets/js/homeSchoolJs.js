document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
    const progressBar = document.querySelector(".progress-bar");
    const nextButtons = document.querySelectorAll(".next-button");

    nextButtons.forEach(button => {
        button.addEventListener("click", event => {
            const currentStep = document.querySelector(".step.active");
            const nextStepId = button.getAttribute("data-next");
            const nextStep = document.getElementById(nextStepId);

            // Validar formularios antes de pasar al siguiente paso
            if (currentStep.id === "step-2") {
                const email = document.getElementById("email").value;
                const confirmEmail = document.getElementById("confirm-email").value;
                const password = document.getElementById("password").value;
                const confirmPassword = document.getElementById("confirm-password").value;

                if (email !== confirmEmail) {
                    alert("Los correos no coinciden.");
                    return;
                }
                if (password !== confirmPassword) {
                    alert("Las contraseñas no coinciden.");
                    return;
                }
            }

            // Cambiar el paso activo
            currentStep.classList.remove("active");
            nextStep.classList.add("active");

            // Actualizar la barra de progreso
            const progress = (Array.from(steps).indexOf(nextStep) + 1) / steps.length * 100;
            progressBar.style.width = `${progress}%`;
        });
    });
});
