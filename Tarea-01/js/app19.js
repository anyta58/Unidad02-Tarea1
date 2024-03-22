// Usando for, crear un programa que determine si un número es perfecto o no, (se dice
// que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3).

let numero = parseInt(prompt('Ingrese un numero: '));
let sumaDivisores = 0;

for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
        sumaDivisores += i;
    }
}

if (sumaDivisores === numero) {
    console.log(`El numero ${numero} es perfecto`);
} else {
    console.log(`El numero ${numero} NO es perfecto`);
}