// Variables para mantener el estado del carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(id, nombre, precio) {
    const producto = { id, nombre, precio };
    carrito.push(producto);
    actualizarResumenCarrito();
}

// Función para actualizar el resumen del carrito en la página
function actualizarResumenCarrito() {
    const carritoResumen = document.getElementById('carrito-resumen');
    carritoResumen.innerHTML = '';

    if (carrito.length === 0) {
        carritoResumen.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        let total = 0;
        carrito.forEach((producto) => {
            total += producto.precio;
            carritoResumen.innerHTML += `<p>${producto.nombre} - $${producto.precio}</p>`;
        });

        carritoResumen.innerHTML += `<p>Total: $${total}</p>`;
    }
}

// Evento para escuchar la adición de productos desde la sección de productos
document.addEventListener('DOMContentLoaded', () => {
    const botonAgregar = document.querySelectorAll('.agregar-al-carrito');

    botonAgregar.forEach((boton) => {
        boton.addEventListener('click', (event) => {
            const producto = event.currentTarget;
            const id = producto.dataset.id;
            const nombre = producto.dataset.nombre;
            const precio = parseFloat(producto.dataset.precio);

            agregarAlCarrito(id, nombre, precio);
        });
    });

    actualizarResumenCarrito();
});