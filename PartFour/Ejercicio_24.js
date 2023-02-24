/*
  024 isEvenLength

    INSTRUCCIONES:
  1. Escribe una funcion llamada isEvenLength. Dada una palabra, isEvenLength retorna true si la cantidad de letras que tiene la palabra es
     par, de lo contrario retorna false.

  EJEMPLO:
    let output = isEvenLength('wow');
    console.log(output); --> false
*/
// Code

const isEvenLength = (word) => {
  return word.length % 2 == 0 ? true : false;
}

let word = 'wow';

let output = isEvenLength(word);
console.log("Valor es: " + output);