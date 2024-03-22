// Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
// introducido por el usuario a través de un prompt.

let array = [];

let n = parseInt(prompt('Ingrese la cantidad de numeros aleatorios que desea generar: '));

for (let i = 0; i < n; i++) {
    const numero = Math.floor(Math.random() * 1000 ) + 1;
    array.push(numero);
}

console.log(array);