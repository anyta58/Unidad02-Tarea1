// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
// determine si el triángulo es válido o no.

let angulo1 = parseFloat(prompt('Ingrese el primer angulo interno del triangulo: '));
let angulo2 = parseFloat(prompt('Ingrese el segundo angulo interno del triangulo: '));
let angulo3 = parseFloat(prompt('Ingrese el tercer angulo interno del triangulo: '));

let sumaAgulos = angulo1 + angulo2 + angulo3;

if (sumaAgulos === 180 ) {
    console.log('El triangulo SI es Valido, la suma de sus angulos es 180');
} else if (sumaAgulos < 180) {
    console.log(`El triangulo NO es Valido, la suma de sus angulos debe ser igual a 180. No menor`);
} else {
    console.log(`El triangulo NO es Valido, la suma de sus angulos debe ser igual a 180. No mayor`);
}