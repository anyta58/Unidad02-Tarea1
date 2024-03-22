// Crear una función que reciba un número entero y muestre un error si el tipo de dato
// pasado es de otro tipo.

function verificarNumero(numero) {
    if (Number.isInteger(numero)) {
        console.log('El argumento ingresado es un numero entero.');
    } else {
        console.log('ERROR!!');
    }
}

let numero = parseFloat(prompt('Ingrese un numero:'));
verificarNumero(numero);