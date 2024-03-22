// Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y
// 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup
// para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el
// programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de
// "Vuelva a intentarlo"

let numAleatorio = Math.floor(Math.random() * 10 ) + 1;

let numeroIngresado = parseInt(prompt('Intente adivinar el numero generado entre 1 y 10: '));

if (numeroIngresado > 10 || numeroIngresado <= 0 ) {
    console.log('Ingrese numeros entre 1 y 10');
} else if (numAleatorio === numeroIngresado) {
    console.log('Buen Trabajo!!');
} else {
    console.log('Vuelva a Intentarlo');
}

console.log(`El numero generado aleatoriamente es ${numAleatorio}`);