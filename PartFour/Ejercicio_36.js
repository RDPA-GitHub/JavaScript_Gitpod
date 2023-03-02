/*
  036 isPersonOldEnoughToDrink

    INSTRUCCIONES:
  1. Escribe una funcion llamada isPersonOldEnoughToDrink. Dado un objeto person, que contiene una propiedad age (edad), isPersonOldEnoughToDrink
     devuelve true si la persona dada tiene edad suficiente para beber. De lo contrario retorna false.

  EJEMPLO:
    let obj = {
      age:16
    };

    let output = isPersonOldEnoughToDrink(obj);
    console.log(output); -->false
*/
// Code:

const isPersonEnoughToDrink = (person) => {
  return person.age >= 21;
}

let obj = {
  age: 16
};

let output = isPersonEnoughToDrink(obj);
console.log(output);