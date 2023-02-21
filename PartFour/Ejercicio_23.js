/*
  023 isOddLength

    INSTRUCCIONES:
  1. Escribe una funcion llamada isOddLength. Dada una palabra, isOddLength retorna true si la cantidad de letras que tiene la palabra es Impar,
     de lo contrario retorna false.
  
  EJEMPLO:
    let output = isOddLength('special');
    console.log(output); --> true
*/
// Code:
const isOddLength = (word) => {
  return word.length%2 !== 0;
}

let output = isOddLength('special');
console.log(output);
