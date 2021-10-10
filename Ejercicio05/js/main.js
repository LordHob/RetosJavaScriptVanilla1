// EJERCICIO 5

// Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también debemos indicarlo.

var numero = prompt("Introduce un numero por favor");

if (numero % 2 === 0) {
    console.log("El numero es par");
} else if (numero % 2 === 1) {
    console.log("El numero es impar");
}