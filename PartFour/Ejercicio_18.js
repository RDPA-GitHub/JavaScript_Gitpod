/*
  018 isEven

    INSTRUCCIONES:
  1. Escribe una funcion llamada isEven. Dado un numero, isEven retorna true si el numero es par. De lo controrio retorna false.

  EJEMPLO:
    let output = isEven(11);
    console.log(output);
*/
// Code:

const isEven = (num) =>{
  return num%2 === 0 ? true : false;
}
let num1 = 11, num2 = 10;
// Para numeros Impares
let output = isEven(num1);
console.log(`Numero Par (${num1}) -> ${output}`);

// Para numeros Pares
console.log(`Numero Par (${num2}) -> ${isEven(num2)}`);