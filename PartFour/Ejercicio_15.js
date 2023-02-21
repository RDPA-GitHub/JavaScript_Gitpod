/*
  015 isLessThan

    INSTRUCCIONES:
  1. Escribe una funcion llamada isLessThan. Dado 2 numeros, isLessThan retorna true si num2 es menor que num1. De lo contrario retorna false.

  EJEMPLO:
    let output = isLessThan(9,4);
    console.log(output); --> true
*/
// Code:

function isLessThan(num1, num2){
  if(num1 > num2) return true;
  else return false;
}

// Para valores mayores a num 2
let output = isLessThan(9,4);
console.log(`Valore mayores a num2: ${output}`);

// Para valores mayores a num 1
console.log(`Valores mayores a num 1: ${isLessThan(4,9)}`);
