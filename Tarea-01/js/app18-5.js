// Todos los ejercicios de while anteriores los debe replicar con el ciclo for.

// Usar For, realizar la suma de todos los números pares entre N y M donde N y M los
// // ingresa un usuario.

let n = parseInt(prompt('Ingrese un numero N: '));
let m = parseInt(prompt('Ingrese un numero M: '));

if (!isNaN(m) || !isNaN(m)) {
    let suma = 0;
    let numActual = n;

    for (let numActual = n; numActual <= m; numActual++) {
        if (numActual % 2 === 0) {
            suma += numActual;
        }
    }
    console.log(`La suma de los numeros pares entre ${n} y ${m} es ${suma}`);
} else {
    console.log('Ingrese numeros validos');
}