/*
  016 isGreaterThan

    INSTRUCCIONES:
  1. Escribe una funcion llamada isGreaterThan. Dado 2 numeros, isGreaterThan retorna true si num2 es mayor que num1. De lo contrario retorna false.

  EJEMPLO:
    let output = isGreaterThan(11, 10);
    console.log(output);
*/
// Code:
function isGreaterThan(num1, num2){
  return num1 < num2 ? true : false;
}

let output = isGreaterThan(11, 10);
console.log(output);