/*
  034 isPersonOldEnoughToDrive

    INSTRUCCIONES:
  1. Escribe una funcion llamada isPersonOldEnoughToDrive. Dado un objeto persona, que contiene una propiedad age(Edad), isPersonEnoughToDrive 
     devuelve true la persona dada tiene la edad suficiente para conducir de lo contrario retorna false.

  Ejemplo:
    let obj = {
      age: 16
    };

    let output = isPersonOldEnoughToDrive(obj);
    console.log(output); -->true

  PISTA:
  --> La edad legal para conducir en los los Estados Unidos es de 16 Años.
*/
// Code: 

const isPersonEnoughToDrive = (person) => {
  return person.age >= 16;
}

let obj = {
  age: 16
};

let output = isPersonEnoughToDrive(obj);
console.log(output);