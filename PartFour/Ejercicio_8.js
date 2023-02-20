/*
  008 checkAge

    INSTRUCCIONES:
  1. Escribe una funcion llamada checkAge. Dado el nombre y la edad de una persona, checkAge retorna uno de estos donde mensajes:

        -> Go home, {insert_name_here}!, si son menores de 21
        -> Welcome, {insert_name_here}!, si son mayores de 21

  EJEMPLO:
    let output = checkAge('Adrian', 22);
    console.log(output); --> Welcome, Adrian!
  
  PISTA:
  -> Reemplaza {insert_name_here}
*/
// Code:

const checkAge = (name, age) => {
  return age < 21 ? `Go Home, ${name}!` : `Welcome, ${name}!`;
}

let output = checkAge('Adrian', 22);
console.log(output);