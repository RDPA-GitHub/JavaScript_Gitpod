/*
  003 isOldEnoughToVote

    INSTRUCCIONES:
  1. Escribe una funcion llamada isOldEnoughToVote. Dado un numero, en este caso una edad, isOldEnoughToVote
     retorna si la persona de esa edad tiene la edad necesaria para votar legalmente en los Estados Unidos.

    EJEMPLO:
     let output = isOldEnoughToVote(22);
     console.log(output);
    
    PISTA:
    -> La edad legal para poder votar en los Estados Unidos es de 18 Años.
*/
//Code:

const isOldEnoughToVote = (Age) => {
  return Age > 18 ? true : false;
} 

let output = isOldEnoughToVote(22);
console.log(output);