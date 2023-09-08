// Datos de ejemplo para los productos
const productos = [
    {
        id: 1,
        nombre: "Jabón de Glicerina Lavanda",
        precio: 5.99,
        descripcion: "Jabón de glicerina con aroma a lavanda.",
        imagen: "/img/producto1.jpg"
    },
    {
        id: 2,
        nombre: "Jabón de Glicerina Rosa",
        precio: 6.99,
        descripcion: "Jabón de glicerina con aroma a rosa.",
        imagen: "/img/producto2.jpg"
    },
    // Agrega más productos aquí
];

// Carrito de compras
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (producto) {
        carrito.push(producto);
        alert('Producto agregado al carrito');
    } else {
        alert('Producto no encontrado');
    }
}

// Función para calcular el total del carrito
function calcularTotalCarrito() {
    let total = 0;
    for (const producto of carrito) {
        total += producto.precio;
    }
    return total;
}

// Función para finalizar la compra
function finalizarCompra() {
    const total = calcularTotalCarrito();
    if (carrito.length === 0) {
        alert('El carrito está vacío. Agrega productos antes de finalizar la compra.');
    } else {
        alert(`Total de compra: $${total.toFixed(2)}. Gracias por tu compra.`);
        carrito.length = 0; // Vacía el carrito después de la compra
    }
}

// Ejemplo de validación de formulario de suscripción
const suscripcionForm = document.querySelector('.suscripcion form');

suscripcionForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = suscripcionForm.querySelector('input[type="email"]').value;

    // Realiza la validación del correo electrónico aquí
    if (validarEmail(email)) {
        alert('¡Gracias por suscribirte!');
    } else {
        alert('Por favor, ingresa un correo electrónico válido.');
    }
});

function validarEmail(email) {
    // Implementa la lógica de validación del correo electrónico aquí
    // Puedes utilizar expresiones regulares u otras técnicas
    // Retorna true si el correo es válido, false en caso contrario
    return true; // Cambia esto con tu lógica de validación real
}