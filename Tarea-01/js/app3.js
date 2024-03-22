//Escriba un programa que pida un número y diga si es divisible por 2.

let num = parseInt(prompt('Ingrese un numero:'));

if (num % 2 === 0) {
    console.log(`El numero ${num} SI es divisible entre 2`);
} else{
    console.log(`El numero ${num} NO es divisible entre 2`);
}