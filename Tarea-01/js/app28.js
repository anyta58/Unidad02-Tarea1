// Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
// contenga sólo las palabras que empiezan con una vocal.

function palabrasConVocal(arregloPalabras) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let palabrasConVocal = arregloPalabras.filter(palabra => {
        let primeraLetra = palabra.toLowerCase().charAt(0);
        return vocales.includes(primeraLetra);
    });
    return palabrasConVocal;
}

let palabras = prompt('Ingrese una serie de palabras separadas por coma: ');
let arregloPalabras = palabras.split(',').map(palabra => palabra.trim());

let palabrasVocalResultado = palabrasConVocal(arregloPalabras);

console.log('Las palabras que empiezan por vocal son: ', palabrasVocalResultado);
