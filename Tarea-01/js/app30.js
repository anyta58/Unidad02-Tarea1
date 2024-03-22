// Crear una función que tome como parámetro un arreglo de números, retornar el número
// menor, si es un número negativo mostrar su valor absoluto.

function numeroMenor(arregloNumeros) {
    if (arregloNumeros.length === 0) {
        return 0;
    }

    let numeroMenor = arregloNumeros[0];

    for (let i = 1; i < arregloNumeros.length; i++) {
        if (arregloNumeros[i] < numeroMenor) {
            numeroMenor = arregloNumeros[i];
        }   
    }

    return Math.abs(numeroMenor);
}

let numeros = prompt('Ingrese una serie de numeros separados por coma: ');
let arrayNumeros = numeros.split(',').map(numero => parseFloat(numero.trim()));

let menor = numeroMenor(arrayNumeros);

console.log(`El numero menor (valor absoluto) es: ${menor}`);