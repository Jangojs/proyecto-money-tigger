document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('soapForm');

    if (formulario) {
        formulario.addEventListener('submit', function (event) {
            event.preventDefault();

            // Obtener los datos del formulario
            const datosFormulario = {
                nombre: document.getElementById('nombre').value,
                email: document.getElementById('email').value,
                fragancia: document.getElementById('Fragancia').value,
                color: document.getElementById('opciones').value,
                tamaño: document.getElementById('tamaño').value,
                tipoPiel: document.getElementById('tipoPiel').value,
                problemasDermatologicos: document.getElementById('problemasDermatologicos').value,
                alergias: document.getElementById('alergias').value,
                shippingAddress: document.getElementById('shippingAddress').value,
                esParaRegalo: document.getElementById('esParaRegalo').checked,
                dedicatoria: document.getElementById('dedicatoria').value,
                imagenRegalo: document.getElementById('imagenRegalo').value,
            };

            // Crear productos de ejemplo basados en la selección del usuario
            const productos = [];

// Agregar producto según la fragancia seleccionada
if (datosFormulario.fragancia === 'Lavanda') {
    // Agregar producto según el color seleccionado
    if (datosFormulario.color === 'Celeste') {
        productos.push({
            imagen: '/GliceSoap/img/15.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de lavanda y color celeste`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Blanco') {
        productos.push({
            imagen: '/GliceSoap/img/19.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de lavanda y color blanco`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Rojo') {
        productos.push({
            imagen: '/GliceSoap/img/rojo.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de lavanda y color rojo`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Verde') {
        productos.push({
            imagen: '/GliceSoap/img/verde.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de lavanda y color verde`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Azul') {
        productos.push({
            imagen: '/GliceSoap/img/azul.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de lavanda y color azul`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Amarillo') {
        productos.push({
            imagen: '/GliceSoap/img/amarillo.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de lavanda y color amarillo`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Naranja') {
        productos.push({
            imagen: '/GliceSoap/img/naranja.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de lavanda y color naranja`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Turquesa') {
        productos.push({
            imagen: '/GliceSoap/img/turquesa.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de lavanda y color turquesa`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'VerdeLimon') {
        productos.push({
            imagen: '/GliceSoap/img/verdeLimon.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de lavanda y color verde limón`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Violeta') {
        productos.push({
            imagen: '/GliceSoap/img/violeta.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de lavanda y color violeta`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Negro') {
        productos.push({
            imagen: '/GliceSoap/img/negro.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de lavanda y color negro`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Cafe') {
        productos.push({
            imagen: '/GliceSoap/img/cafe.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de lavanda y color café`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Rosado') {
        productos.push({
            imagen: '/GliceSoap/img/rosado.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de lavanda y color rosado`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    }
    // Puedes seguir agregando condiciones para más colores
} else if (datosFormulario.fragancia === 'Coco') {
    // Agregar producto según el color seleccionado
    if (datosFormulario.color === 'Celeste') {
        productos.push({
            imagen: '/GliceSoap/img/8.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de coco y color celeste`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Blanco') {
        productos.push({
            imagen: '/GliceSoap/img/12.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de coco y color blanco`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Rojo') {
        productos.push({
            imagen: '/GliceSoap/img/1.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de coco y color rojo`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Verde') {
        productos.push({
            imagen: '/GliceSoap/img/2.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de coco y color verde`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Azul') {
        productos.push({
            imagen: '/GliceSoap/img/3.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de coco y color azul`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Amarillo') {
        productos.push({
            imagen: '/GliceSoap/img/4.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de coco y color amarillo`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Naranja') {
        productos.push({
            imagen: '/GliceSoap/img/5.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de coco y color naranja`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Turquesa') {
        productos.push({
            imagen: '/GliceSoap/img/6.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de coco y color turquesa`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'VerdeLimon') {
        productos.push({
            imagen: '/GliceSoap/img/7.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de coco y color verde limón`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Violeta') {
        productos.push({
            imagen: '/GliceSoap/img/8.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de coco y color violeta`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Negro') {
        productos.push({
            imagen: '/GliceSoap/img/9.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de coco y color negro`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Cafe') {
        productos.push({
            imagen: '/GliceSoap/img/10.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de coco y color café`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    } else if (datosFormulario.color === 'Rosado') {
        productos.push({
            imagen: '/GliceSoap/img/11.jpg',
            descripcion: `Jabón personalizado para ${datosFormulario.nombre} con fragancia de coco y color rosado`,
            precio: getRandomPrice(),
            dedicatoria: datosFormulario.dedicatoria,
            imagenRegalo: datosFormulario.imagenRegalo,
        });
    }
    // Puedes seguir agregando condiciones para más colores
} // Puedes agregar más bloques 'else if' según las opciones disponibles

            // Puedes agregar más bloques 'else if' según las opciones disponibles

            // Almacenar los productos en localStorage
            localStorage.setItem('productos', JSON.stringify(productos));

            // Almacenar los datos del formulario en localStorage
            localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario));

            // Redirigir a Carrito.html
            window.location.href = '/GliceSoap/carrito.html';
        });

        function getRandomPrice(min = 5, max = 10) {
            // Genera un precio aleatorio entre 5 a 10 dólares
            return (Math.random() * (max - min) + min).toFixed(2);
        }
    }
});