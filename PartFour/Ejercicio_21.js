/*
  021 areBothOdd

    INSTRUCCIONES:
  1. Escribe una funcion llamada areBothOdd, que dados 2 numeros, areBothOdd retorna true si ambos numeros son pares, de lo contrario retorna
     false.
  
  EJEMPLO:
    let output = areBothOdd(1,3);
    console.log(output);
*/
// Code:
const areBothOdd = (num1, num2) => {
  return num1%2 !== 0 && num2%2 !== 0;
}

let output = areBothOdd(1,3);
console.log(output);