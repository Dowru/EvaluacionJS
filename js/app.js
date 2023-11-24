
// Obtener el contenedor del carrito
var divCarrito = document.getElementById('divCarrito')
var carrito = document.getElementById('carritoContenido');
var total = document.getElementById('total')

// ...

function mostrarCarrito() {
    divCarrito.style.display = 'block';
}

function ocultarCarrito() {
    divCarrito.style.display = 'none';
}

var productosEnCarrito = {}

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    // Verificar si el producto ya está en el carrito
    if (productosEnCarrito[nombre]) {
        // Si sí, incrementar la cantidad y actualizar el precio total
        productosEnCarrito[nombre].cantidad++;
        productosEnCarrito[nombre].precioTotal = productosEnCarrito[nombre].cantidad * precio;
    } else {
        // Si no, agregar el producto al carrito con cantidad 1
        productosEnCarrito[nombre] = {
            cantidad: 1,
            precioTotal: precio
        };
    }

    // Actualizar el contenido del carrito
    actualizarCarrito();

}

// Función para actualizar el contenido del carrito en la página
function actualizarCarrito() {
    // Limpiar el contenido actual del carrito
    carrito.innerHTML = '';

    // Recorrer el objeto de productos en el carrito y agregarlos al DOM
    for (var producto in productosEnCarrito) {
        var infoProducto = productosEnCarrito[producto];
        var nuevoProducto = document.createElement('div');
        nuevoProducto.innerHTML = `<p>${producto} x${infoProducto.cantidad} - $${infoProducto.precioTotal}</p>`;
        carrito.appendChild(nuevoProducto);
    }

    // Actualizar el total final del carrito
    var totalCarrito = calcularTotalCarrito();
    console.log('Total del carrito:', totalCarrito);
}

// Función para calcular el total final del carrito
function calcularTotalCarrito() {
    var total = 0;

    // Recorrer el objeto de productos en el carrito y sumar los precios
    for (var producto in productosEnCarrito) {
        total += productosEnCarrito[producto].precioTotal;
    }

    return total;
}

// Función para mostrar el total del carrito en un elemento HTML
function mostrarTotalCarrito() {
    var totalCarrito = calcularTotalCarrito();
    
    // Actualizar el elemento en el HTML
    document.getElementById('totalCarrito').textContent = `Total del carrito: $${totalCarrito}`
}

// Función para resetear o limpiar el carrito
function limpiarCarrito() {
    // Reiniciar el objeto de productos en el carrito
    productosEnCarrito = {};
    // Actualizar el contenido del carrito
    actualizarCarrito();
}

