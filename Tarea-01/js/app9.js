// Crear un programa que determine si un string introducido por un usuario inicia con un
// número o con una letra.

let string = prompt('Ingrese un STRING (numeros y letras):');

let primerCaracter = string.charAt(0);

if (!isNaN(primerCaracter)) {
    console.log('El string inicia con un numero.');
} else {
    console.log('El string inicia con una letra.');
}