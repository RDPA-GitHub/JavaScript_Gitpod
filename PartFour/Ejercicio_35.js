/*
  035 isPersonOldEnoughToVote

    INSTRUCCIONES:
  1. Escribe una funcion llamada isPersonOldEnoughToVote. Dado un objeto person, que contiene una propiedad suficiente age (edad).
     isPersonOldEnoughToVote devuelve true si la persona dada tiene la edad suficiente para votar. De lo contrario retorna false.

  EJEMPLO:
    let obj = {
      age : 19
    };

    let output = isPersonOldEnoughToVote(obj);
    console.log(output); --> true
  
  PISTA:
  --> La edad para votar en los Estados Unidos es de 18 Años.
*/
// Code:

const isPersonEnoughToVote = (person) =>{
  return person.age >= 18;
}

let obj = {
  age: 19
};

let output = isPersonEnoughToVote(obj);
console.log(`
Tiene la edad suficiente para Votar: ${output}
`);