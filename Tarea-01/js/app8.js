// Crear un programa que determine si un número introducido en un Prompt es divisible
// por 5 o no, mostrar el resultado con console.log.

let num = parseInt(prompt('Ingrese un numero: '));

if (num % 5 === 0 ) {
    console.log(`El numero ${num} SI es divisible entre 5.`);
} else {
    console.log(`El numero ${num} NO es divisible entre 5.`);
}