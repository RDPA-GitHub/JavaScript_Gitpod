/*
  033 isPersonOldEnoughToDrinkAndDrive

    INSTRUCCIONES:
  1. Escribe una funcion llamada isPersonOldEnoughToDrinkAndDrive. Dado un objeto persona, que contiene una propiedad edad,
     isPersonOldEnoughToDrinkAndDrive devuelve true si la persona tiene la esas suficiente para beber y conducir legalmente
     en los Estados Unidos. De lo contrario retorna false.
  
  EJEMPLO:
    let Obj = {
      age: 45
    };

    let output = isPersonOldEnoughToDrinkAndDrive(Obj);
    console.log(output); --> true

  PISTAS:
  -> La Edad legal para beber alcohol en los Estados Unidos es de 21 Años.
  -> La Edad legar para conducir en los Estados Unidos es de 16 Años.
  -> Siempre es ilegal beber y conducir en los Estados Unidos.
  */
 // Code:

 const isPersonOldEnoughToDrinkAndDrive = (person) => {
  return person.age >= 21;
 }

 let obj = {
  age: 45
 };

 let output = isPersonOldEnoughToDrinkAndDrive(obj);
 console.log(output);