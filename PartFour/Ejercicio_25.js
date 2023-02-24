/*
  025 isEvenAndGreaterThanTen

    INSTRUCCIONES:
  1. Escribe una funcion llamada isEvenAndGreaterThanTen. Dado un numero isEvenAndGreaterThanTen retorna true si el numero
     es par y mayor que 10, de lo contrario retorna false.

  EJEMPLO:
    let output =  isEvenAndGreaterThanTen(13);
    console.log(output);
*/
// Code:

const isEvenAndGreaterThanTen = (num) => {
  return num%2 == 0 && num > 10;
}

let output = isEvenAndGreaterThanTen(13);
console.log(output);