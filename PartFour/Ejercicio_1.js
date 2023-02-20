/*
  001 -  isOldEnoughToDrink

    INSTRUCCIONES:
    1. Escribe una funcion llamada isOldEnoughToDrink. Dado un numero, en este caso una edad, isOldEnoughToDrink retornan si la persona
       de esa edad tiene la edad necesaria para Beber legalmente en los Estados Unidos.

       Ejemplo:   

        let output = isOldEnoughToDrink(22);
        console.log(output); --> true
    
    PISTA:
    -> La edad legal para poder beber en los Estados Unidos es de 21 Años.
*/

//Code:

const isOldEnoughToDrink = (Age) => {
  return Age < 21 ? false : true;
}

let Edad = 18;
let output = isOldEnoughToDrink(Edad);

console.log(output);