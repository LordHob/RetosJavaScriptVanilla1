// EJERCICIO 12

// Escribe una aplicación con un String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).

var contraseña = "admin1234";
var intentos = 0;
var respuesta = "";

do {
    pregunta = prompt("Introduzca contraseña por favor");
    intentos++;
} while ((contraseña != respuesta) && (intentos < 3));

if (contraseña==respuesta) {
    alert("Bienvenido ^_^");
} else {
    alert("Has agotado el número de intenteos");
}

