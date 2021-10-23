// EJERCICIO 13

// Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo aritmético(String), según este último se realizará la operación correspondiente. Al final mostrara el resultado en un cuadro de dialogo. Los signos aritméticos disponibles son: +: suma los dos operandos. -: resta los operandos. *: multiplica los operandos. /: divide los operandos, este debe dar un resultado con decimales(double) ^: 1o operando como base y 2o como exponente. %: módulo, resto de la división entre operando1 y operando2.

let numero1 = prompt("Introduce el primer número");
let numero2 = prompt("Introduce el segundo número");
let operacion = prompt("¿Que operación vas a realizar? : + , - , * , /");
let result = "";

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

switch (operacion) {
    case "+":
        result = numero1 + numero2;

        break;
    case "-":
        result = numero1 - numero2;

        break;
    case "*":
        result = numero1 * numero2;

        break;
    case "/":
        result = numero1 / numero2;
        break;
}
alert("El resultado es " + result);