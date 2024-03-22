// Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
// solo los números pares, pista: utilizar reduce().

function obtenerNumerosPares(arreglo) {
    return arreglo.reduce((resultado, numero) => {
        if (numero % 2 === 0) {
            resultado.push(numero);
        }
        return resultado;
    }, []);
}

let numeros = prompt('Ingrese una serie de números separados por coma:');
let arregloNumeros = numeros.split(',').map(numero => parseInt(numero.trim()));

let numerosPares = obtenerNumerosPares(arregloNumeros);

console.log(numerosPares);