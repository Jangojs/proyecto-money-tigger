document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");

    registrationForm.addEventListener("submit", function (e) {
        if (passwordField.value !== confirmPasswordField.value) {
            e.preventDefault(); // Evita que se envíe el formulario si las contraseñas no coinciden
            alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
        }
    });
});