//Escriba un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.

let frase = prompt('Ingrese una frase: ');

contadorA = 0;
contadorE = 0;
contadorI = 0;
contadorO = 0;
contadorU = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === 'a') {
        contadorA++;
    } 
}

for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === 'e') {
        contadorE++;
    } 
}

for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === 'i') {
        contadorI++;
    } 
}

for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === 'o') {
        contadorO++;
    } 
}

for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === 'u') {
        contadorU++;
    } 
}

console.log(`En la frase ingresada ${frase} 
\nLa letra 'a' aparece ${contadorA} veces.
La letra 'e' aparece ${contadorE} veces. \nLa letra 'i' aparece ${contadorI} veces.
La letra 'o' aparece ${contadorO} veces. \nLa letra 'u' aparece ${contadorU} veces.`);