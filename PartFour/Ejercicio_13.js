/*
  013 isLessThan30

    INSTRUCCIONES:
  1. Escribe una funcion llamada isLessThan30. Dado un numero, isLessThan30 retorna true si ese numero es menor a 30. De lo contrario
     retorna false.
  
  EJEMPLO:
    let output = isLessThan30(9);
    console.log(output);
*/
// Code:

const isLessThan30 = (num) => {
  if(num < 30) return true;
  else return false;
}

// Para valores menores a 30
let output = isLessThan30(9);
console.log(`Valores menores a 30: ${output}`);

// Para valores mayores a 30
console.log(`Valores mayores a 30: ${isLessThan30(32)}`);