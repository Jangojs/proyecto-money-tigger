document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Evitar el envío del formulario por defecto

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Aquí puedes agregar lógica de autenticación simulada
        if (username === "usuario" && password === "contraseña") {
            // Autenticación exitosa, redireccionar o realizar alguna acción
            alert("Inicio de sesión exitoso");
        } else {
            // Autenticación fallida, mostrar mensaje de error
            errorMessage.textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
        }
    });
});