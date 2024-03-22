// Crear un programa que determine si un número introducido en un Prompt es par o
// no, la respuesta será mostrada en la consola.

let num = parseInt(prompt('Ingrese un numero: '));

if (num % 2 === 0 ) {
    console.log(`El numero ${num} SI es par.`);
} else {
    console.log(`El numero ${num} NO es par.`);
}