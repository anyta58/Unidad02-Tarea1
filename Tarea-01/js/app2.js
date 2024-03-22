//Escriba un programa que pida 3 números y escriba en la consola el mayor de los tres.

let num1 = parseInt(prompt('Ingrese el primer numero: '));
let num2 = parseInt(prompt('Ingrese el segundo numero: '));
let num3 = parseInt(prompt('Ingrese el tercer numero:'));

if (num1 >= num2 && num1 >= num3) {
    console.log(`El mayor de los tres numeros ingresados es: ${num1}`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`El mayor de los tres numeros ingresados es: ${num2}`);
} else {
    console.log(`El mayor de los tres numeros ingresados es: ${num3}`);
}