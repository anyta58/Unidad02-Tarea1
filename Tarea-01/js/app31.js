// Crear una función que tome como parámetro un arreglo de números, retornar un nuevo
// arreglo invirtiendo los elementos ejemplo. [1,2,3] => [3,2,1].

function invertir(arraynumeros) {
    return arraynumeros.reverse();
}

let numero = prompt('Ingrese una serie de numeros separados por coma: ');
let arregloNum = numero.split(',').map(numero => parseFloat(numero.trim()));

let arrayinvertido = invertir(arregloNum);

console.log('El arreglo invertido es: ', arrayinvertido);