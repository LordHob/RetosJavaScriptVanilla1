// EJERCICIO 6

// Lee un número por teclado que pida el precio de un producto (puede tener decimales) y calcule el precio final con IVA. El IVA sera una constante que sera del 21 %

var precio = prompt("Introduce precio del producto");
const IVA = 1.21;
let result;

result = precio * IVA;

alert("El precio total es " + result)