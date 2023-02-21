/*
  014 equalsTen

    INSTRUCCIONES:
  1. Escribe una funcion llamada equalsTen. Dado un numero, equalsTen retorna true si ese numero es igual a 10. de lo contrario
     retorna false.
  
  EJEMPLO:
    let output = equalsTen(9);
    console.log(output);
  
  PISTA:
  -> Recuerda usar tres signos iguales (===) para comparar valores exactos.
*/
// Code:

const equalsTen = (num) => {
  if (num === 10) return true;
  else return false;
}

// Para valores distintos a 10
let output = equalsTen(9);
console.log(`Valores distinto a 10: ${output}`);

// Para valores iguales a 10
console.log(`Valor igual a 10: ${equalsTen(10)}`);