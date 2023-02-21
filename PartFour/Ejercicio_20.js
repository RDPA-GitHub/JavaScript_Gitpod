/*
  020 isSameLength

    INSTRUCCIONES:
  1. Escribe una funcion llamada isSameLength. Dado dos palabras isSameLength retorna true si ambas palabras tienen la misma cantidad de letras. 
     De lo contrario retorna false.

  EJEMPLO:
    let output = isSameLength('words', 'super');
    console.log(output);
*/
// Code:

const isSameLength = (word1, word2) => {
  return word1.length === word2.length;
}

let output = isSameLength('words', 'super');
console.log(output);