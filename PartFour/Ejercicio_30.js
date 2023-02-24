/*
  030 computeAverageLengthOfWords

    INSTRUCCIONES:
  1. Escribe una funcion llamada computeAverageLengthOfWords. Dado dos palabras, computeAverageLengthOfWords retorna el promedio de la cantidad
     de letras de ambas.

  EJEMPLO:
    let output = computeAverageLengthOfWords('code', 'programs');
    console.log(output);
*/
// Code:

const computeAverageLengthOfWords = (word1, word2) => {
  let Promedio = (word1.length + word2.length) / 2;
  return Promedio;
}

let word1 = 'code', word2 = 'programs';
let output = computeAverageLengthOfWords(word1, word2);
console.log(`
El promedio entre las Palabras: 
1. Palabra 1: "${word1}"
2. Palabra 2: "${word2}"
-> Promedio: ${output}
`)