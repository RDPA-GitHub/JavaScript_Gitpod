/*
  011 getLengthOfTwoWords

    INSTRUCCIONES:
  1. Escribe una funcion llamada getLengthOfTwoWords. Dado dos palabras, getLengthOfTwoWords retorna la suma de sus letras.

  EJEMPLO:
    let output = getLengthOfTwoWords('some', 'words');
    console.log(output);
*/
// Code:

const getLengthOfTwoWords = (word1, word2) => {
  return word1.length + word2.length;
}

let output = getLengthOfTwoWords('some', 'words');
console.log(`Son ${output} Letras entre las 2 palabras`);