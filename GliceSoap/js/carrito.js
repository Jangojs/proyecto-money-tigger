// Código JavaScript para la página del carrito
document.addEventListener('DOMContentLoaded', function () {
    // Recuperar datos del formulario almacenados en localStorage
    const datosFormularioString = localStorage.getItem('datosFormulario');
    
    if (datosFormularioString) {
        const datosFormulario = JSON.parse(datosFormularioString);
        // Aquí puedes utilizar los datosFormulario para mostrar la información en el carrito
        console.log(datosFormulario);
    } else {
        // Si no hay datos en el localStorage, puedes redirigir a la página principal o hacer algo más
        console.log('No hay datos en el carrito');
    }
});