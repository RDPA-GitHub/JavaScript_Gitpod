/*
  027 computeAreaOfATriangle

    INSTRUCCIONES:
  1. Escribe una funcion llamada computeAreaOfATriangle. Dado la base y la altura de un triangulo, computeAreaOfATriangle retorna el area de un
     triangulo.
  
  EJEMPLO:
    let output = computeAreaOfATriangle(4,6);
    console.log(output); --> 12
*/
// Code:

const computeAreaOfATriangle = (base, altura) => {
  return (base * altura) / 2;
}

let base = 4, altura = 6;

let output = computeAreaOfATriangle(base, altura);
console.log(`\nEl Area del triangulo donde:
1. La base es: ${base}
2. La altura es: ${altura}
-> Area del Triangulo: ${output}\n`);