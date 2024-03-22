//Escribir un programa que escriba en pantalla los divisores de un número dado.

let num = prompt('Ingrese un numero: ');
let divisores = [];

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        divisores.push(i);
    }
}

console.log(`Los divisores del numero ${num} son: ${divisores}`);