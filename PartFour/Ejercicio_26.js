/*
  026 Average

    INSTRUCCIONES:
  1. Escribe una funcion llamada average. Dado 2 numero, average retorna su promedio.

  EJEMPLO:
    let output = average(4,6);
    console.log(output);
*/

const average = (num1, num2) => {
  let Promedio = (num1 + num2) / 2;
  return Promedio;
}
let num1 = 4, num2 = 6;
let output = average (num1, num2);
console.log(`El Promedio entre los numeros ${num1} y ${num2} es: ${output}`);