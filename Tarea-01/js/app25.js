// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
// un color introducido por el usuario a través de un prompt se encuentra dentro del array o
// no.

let array = ['azul', 'amarillo', 'rojo', 'verde', 'cafe', 'rosa'];

let color = prompt('Intente adivinar un color que se encuentra dentro del array: ');
color = color.toLowerCase()

if (array.includes(color)) {
    console.log(`El color ${color} se encuentra dentro del array`);
} else {
    console.log(`El color ${color}  No se encuentra dentro del array`);
}
