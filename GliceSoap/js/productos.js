document.addEventListener("DOMContentLoaded", function () {
    // Datos simulados para productos
    const productos = [
        { id: 1, nombre: "Jabón Lavanda", precio: 5.99, imagen: "lavanda.jpg" },
        { id: 2, nombre: "Jabón Rosa Mosqueta", precio: 6.99, imagen: "rosa.jpg" },
        { id: 3, nombre: "Jabón de Aloe Vera", precio: 7.99, imagen: "aloe.jpg" },
        // Agrega más productos aquí
    ];

    const listaProductos = document.querySelector(".lista-productos");
    const carrito = document.getElementById("carrito");

    // Función para mostrar productos
    function mostrarProductos() {
        listaProductos.innerHTML = "";
        productos.forEach((producto) => {
            const productoDiv = document.createElement("div");
            productoDiv.classList.add("producto");
            productoDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <button class="agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
            `;
            listaProductos.appendChild(productoDiv);
        });
    }

    mostrarProductos();

    // Carrito de compras
    const carritoProductos = [];

    function agregarAlCarrito(id) {
        const producto = productos.find((p) => p.id === id);
        carritoProductos.push(producto);
        actualizarCarrito();
    }

    function actualizarCarrito() {
        carrito.innerHTML = "";
        const total = carritoProductos.reduce((sum, producto) => sum + producto.precio, 0);
    
        carritoProductos.forEach((producto) => {
            const carritoItem = document.createElement("div");
            carritoItem.classList.add("carrito-item");
            carritoItem.innerHTML = `
                <p>${producto.nombre} - $${producto.precio.toFixed(2)}</p>
                <button class="quitar-producto" data-index="${index}">Quitar</button>
            `;
            carrito.appendChild(carritoItem);
        });
    
        const totalDiv = document.createElement("div");
        totalDiv.classList.add("total");
        totalDiv.innerHTML = `<strong>Total:</strong> $${total.toFixed(2)}`;
        carrito.appendChild(totalDiv);
    
        carrito.addEventListener("click", (event) => {
            if (event.target.classList.contains("quitar-producto")) {
                const index = parseInt(event.target.getAttribute("data-index"));
                if (!isNaN(index) && index >= 0 && index < carritoProductos.length) {
                    carritoProductos.splice(index, 1); // Elimina el producto del carrito
                    actualizarCarrito(); // Actualiza la visualización del carrito
                }
            }
        });
    }
      
    // Evento para agregar productos al carrito
    listaProductos.addEventListener("click", (event) => {
        if (event.target.classList.contains("agregar-carrito")) {
            const id = parseInt(event.target.getAttribute("data-id"));
            agregarAlCarrito(id);
        }
    });
});