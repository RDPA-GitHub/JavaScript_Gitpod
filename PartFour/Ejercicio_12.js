/*
  012 isGreaterThanTen

    INSTRUCCIONES:
  1. Escribe una funcion llamada isGreaterThanTen. Dado un numero, isGreaterThanTen retorna true si este es mayor a 10, sino retorna false.

  EJEMPLO:
    let output = isGreaterThanTen(11);
    console.log(output); --> true
*/
// Code:

const isGreaterThanTen = (num) => {
  return num > 10 ? true : false;
}

// Para valores mayores que  10
let output = isGreaterThanTen(11);
console.log(`Valores mayores que 10: ${output}`);

// Para valores menores que 10
console.log(`Valores menores que 10: ${isGreaterThanTen(9)}`);