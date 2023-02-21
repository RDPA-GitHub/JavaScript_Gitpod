/*
  017 isEqualTo

    INSTRUCCIONES:
  1. Escribe una funcion llamada isEqualTo. Dado 2 numeros, isEqualTo retorna true si num2 es igual a num1. De lo contrario retorna false.

  EJEMPLO:
    let output = isEqualTo(11, 10);
    console.log(output); --> false
*/
// Code:

const isEqualTo = (num1, num2) => {
  return num1 === num2 ? true : false;
}

let output = isEqualTo(11, 10);
console.log(output);