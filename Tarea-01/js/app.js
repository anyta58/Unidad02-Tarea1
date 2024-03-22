//Escriba un programa que pida dos números y escriba en la consola cuál es el mayor.

let num1 = parseInt(prompt('Ingrese el primer numero: '));
let num2 = parseInt(prompt('Ingrese el segundo numero'));

if (num1 > num2) {
    console.log(`El numero ${num1} es mayor que el numero ${num2}`);
} else if (num2 > num1) {
    console.log(`El numero ${num2} es mayor que el numero ${num1}`);
}else {
    console.log(`El numero ${num1} y ${num2} son iguales.`);
}