// EJERCICIO 11

// Crea una aplicación que nos pida un día de la semana y que nos diga si es un día laboral o no. Usa un switch para ello.

let dia = prompt('Introduce el día de la semana');

switch (dia) {
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
    case "viernes":
        alert("Día laborable")
        break;
    case "sábado":
    case "domingo":
        alert("Día festivo")

    default:
        alert("Cómprate un cuadernillo Rubio zoquete")
        break;
}