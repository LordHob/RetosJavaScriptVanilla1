// EJERCICIO 10

// Realiza una aplicación que nos pida un número de ventas a introducir, después nos pedirá tantas ventas por teclado como número de ventas se hayan indicado. Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo que no.

var NVentas = prompt('Introduce el número de articulos vendidos');
var Result = 0;

for (var i = 1; i <= NVentas; i++) {
    Result = Result + parseFloat(prompt("Precio del artículo " + i));
}

alert("El precio total es: " + Result);