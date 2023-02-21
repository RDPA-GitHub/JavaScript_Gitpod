/*
  022 isEitherEven

    INSTRUCCIONES:
  1. Escribe una funcion llamada isEitherEven, que dados 2 numeros, isEitherEven retorna true si uno de los numeros es Par, de lo contrario
     retorna false.
  
  EJEMPLO:
    let output = isEitherEven(1,4);
    console.log(output);
*/
// Code:
const isEitherEven = (num1, num2) => {
  return num1%2 === 0 || num2%2 === 0;
}

let output = isEitherEven(1,4);
console.log(output);