//Escriba un programa que pida una frase y escriba cuantas veces aparece la letra a.

let frase = prompt('Escriba un frase:');

let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === 'a') {
        contador++;
    } 
}

console.log(`En la frase ingresada la letra 'a' aparece ${contador} veces.`);