// EJERCICIO 4

// Haz una aplicación que calcule el área de un círculo (pi * R2). El radio se pedirá por teclado (recuerda pasar de String a double con parseDouble). Usa la constante PI.

const PI = 3.1416;
var radio = prompt("Introduce el radio del círculo");
var result;

radio = parseDouble(radio);
result = PI * radio ** 2;

alert("El área es " + result);