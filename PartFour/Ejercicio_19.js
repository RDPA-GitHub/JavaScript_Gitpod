/*
  019 isOdd

    INSTRUCCIONES:
  1. Escribe una funcion llamada isOdd. Dado un numero, isOdd retorna true si el numero es impar. De lo contrario retorna false.

  EJEMPLO:
    let output = isEven(9);
    console.log(output); --> true
*/
// Code:

const isOdd = (num) => {
  return num%2 !== 0 ? true : false;
}

let output = isOdd(9);
console.log(output);