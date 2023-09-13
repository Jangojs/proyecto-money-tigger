document.addEventListener("DOMContentLoaded", function () {
    // Simular la carga de productos destacados y testimonios
    const destacadosSection = document.querySelector(".destacados");
    const testimoniosSection = document.querySelector(".testimonios");

    // Datos simulados para productos destacados
    const productosDestacados = [
        { nombre: "Jabón Lavanda", precio: "$5.99", imagen: "lavanda.jpg" },
        { nombre: "Jabón Rosa Mosqueta", precio: "$6.99", imagen: "rosa.jpg" },
        { nombre: "Jabón de Aloe Vera", precio: "$7.99", imagen: "aloe.jpg" },
    ];

    // Datos simulados para testimonios
    const testimonios = [
        { nombre: "Ana", comentario: "¡Me encantan los jabones! Son geniales." },
        { nombre: "Carlos", comentario: "Productos de alta calidad y buen servicio." },
    ];

    // Función para mostrar productos destacados
    function mostrarProductosDestacados() {
        productosDestacados.forEach((producto) => {
            const productoDiv = document.createElement("div");
            productoDiv.classList.add("producto");
            productoDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>Precio: ${producto.precio}</p>
            `;
            destacadosSection.appendChild(productoDiv);
        });
    }

    // Función para mostrar testimonios
    function mostrarTestimonios() {
        testimonios.forEach((testimonio) => {
            const testimonioDiv = document.createElement("div");
            testimonioDiv.classList.add("testimonio");
            testimonioDiv.innerHTML = `
                <p>${testimonio.comentario}</p>
                <p><em>${testimonio.nombre}</em></p>
            `;
            testimoniosSection.appendChild(testimonioDiv);
        });
    }

    mostrarProductosDestacados();
    mostrarTestimonios();
});


// JavaScript para la página de catálogo de productos

// Función para manejar el evento de clic en "Añadir al carrito"
document.addEventListener('DOMContentLoaded', function () {
    const botonesAgregar = document.querySelectorAll('.btn-agregar');
    
    botonesAgregar.forEach(btn => {
        btn.addEventListener('click', () => {
            const productoNombre = btn.getAttribute('data-producto');
            alert(`¡${productoNombre} añadido al carrito!`);
        });
    });
});