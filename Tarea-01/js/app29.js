// Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este
// vacío debe devolver cero.

function calcularPromedio(array) {
    if (array.length === 0) {
        return 0;
    } else {
        const suma = array.reduce((total, numero) => total + numero, 0);
        return suma / array.length
    }
}

let numeros = prompt('Ingrese una serie de numeros separdos por coma: ');
let arregloNumeros = numeros.split(',').map(numero => parseInt(numero.trim()));
let promedio = calcularPromedio(arregloNumeros);

console.log(`El promedio es: ${promedio}`);