// Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
// // tabla del número hasta 12.

let numero = parseInt(prompt('Ingrese un numero:'));

let i = 1;

while (i <= 12 ) {
    console.log(`${numero} x ${i} = ${numero * i}`);
    i++;
}