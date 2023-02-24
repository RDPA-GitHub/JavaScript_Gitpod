/*
  028 Cube

    INSTRUCCIONES:
  1. Escribe una funcion llamada cube. Dado un numero, cube retorna el cubo de ese numero.

  EJEMPLO:
    let output = cube(3);
    console.log(output): --> 27
*/
// Code:

const cube = (num) => {
  return Math.pow(num, 3);
}

let num = 3;
let output = cube(num);

console.log(`
El Valor cubico de (${num}) es de: ${output}
`);