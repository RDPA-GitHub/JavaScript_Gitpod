/* 
  002 isOldEnoughToDrive

    INSTRUCCIONES:
  1. Escribe una funcion llamada isOldEnoughToDrive que dado un numero, en este caso una Edad, isOldEnoughToDrive
     retorna si la persona de esa edad tiene la edad necesaria para conducir legalmente en los Estados Unidos.

    EJEMPLO:
     let output = isOldEnoughToDrive(22);
     console.log(output);

    PISTA:
    -> La edad legal para poder conducir en los Estados Unidos es de 16 Años.
*/
//Code:

function isOldEnoughToDrive(Age){
  if(Age<16) return false;
  else return true;
}

let output = isOldEnoughToDrive(22);
console.log(output);