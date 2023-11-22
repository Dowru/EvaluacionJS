// Iniciamos con el contador en cero
let contador = 0;

// Esta funcion es para actualizar el total basado en el contador, precio y elemento total
function actualizarTotal(contadorElementId, precioElementId, totalElementId) {
    // Obtener referencias a los elementos HTML
    const contadorElement = document.getElementById(contadorElementId);
    const precioElement = document.getElementById(precioElementId);
    const totalElement = document.getElementById(totalElementId);

    // Aqui obtener valores del contador y precio, y calcular el total
    const cantidad = parseInt(contadorElement.textContent);
    const precio = parseFloat(precioElement.textContent.replace(',', ''));
    const total = cantidad * precio;

    // Aqui mostramos el total con formato de número
    totalElement.textContent = total.toLocaleString();
}

// Esta funcion para incrementar el contador y actualizar el total
function incremento(contadorElementId, precioElementId, totalElementId) {
    // Incrementamos el contador
    contador += 1;

    // Aqui se actualiza el elemento HTML del contador y recalcular el total
    const contadorElement = document.getElementById(contadorElementId);
    contadorElement.textContent = contador;
    actualizarTotal(contadorElementId, precioElementId, totalElementId);
}

// Esta funcion para decrementar el contador y actualizar el total
function decremento(contadorElementId, precioElementId, totalElementId) {
    // Decrementar el contador si es mayor a cero, de lo contrario, mantenerlo en cero
    contador = (contador > 0) ? contador - 1 : 0;

    // Aqui actualiza el elemento HTML del contador y recalcular el total
    const contadorElement = document.getElementById(contadorElementId);
    contadorElement.textContent = contador;
    actualizarTotal(contadorElementId, precioElementId, totalElementId);
}

// Esta función para resetear el contador y actualizar el total
function resetear(contadorElementId, precioElementId, totalElementId) {
    // Reiniciar el contador a cero
    contador = 0;

    // Aqui se actualiza el elemento HTML del contador y recalcular el total
    const contadorElement = document.getElementById(contadorElementId);
    contadorElement.textContent = contador;
    actualizarTotal(contadorElementId, precioElementId, totalElementId);
}

// Aquí se actualiza los totales iniciales para los elementos con ID 'ValorPython' y 'ValorJavaScript'
actualizarTotal('ValorPython', 'PrecioPython', 'totalPPython');
actualizarTotal('ValorJavaScript', 'PrecioJavaScript', 'totalPJavaScript');
