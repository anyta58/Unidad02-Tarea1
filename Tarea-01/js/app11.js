// Determinar si una palabra empieza con mayúscula o no.

let palabra = prompt('Ingrese una palabra: ');

primerCaracter = palabra.charAt(0);

if (primerCaracter === primerCaracter.toUpperCase()) {
    console.log('La palabra empieza con mayuscula.');
} else {
    console.log('La palabra no empieza con mayusculas.');
}
