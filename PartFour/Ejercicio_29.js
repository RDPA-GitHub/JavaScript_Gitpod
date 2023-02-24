/*
  029 Square

    INSTRUCCIONES:
  1. Escribe una funcion llamada square. Dado un numero, square retorna el cuadrado de dicho numero.

  EJEMPLO:
    let output = square(5);
    console.log(output); --> 25
*/
// Code:

const square = (num) => {
  return Math.pow(num, 2);
}

let num = 5;
let output = square(num);

console.log(`
El cuadrado del numero (${num}) es: ${output}
`);