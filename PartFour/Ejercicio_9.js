/*
  009 getFullName

    INSTRUCCIONES:
  1. Escribe una funcion llamada getFullName. Dado un nombre y un apellido, getFullName retorna un String con el nombre y apellido separados
     por un espacio.
  
  EJEMPLO:
    let output = getFullName('Joe', 'Smith');
    console.log(output);
*/
// Code:

const getFullName = (firstName, lastName) =>{
  let fullName = `${firstName} ${lastName}`;

  return fullName;
}

let output = getFullName('Joe', 'Smith');
console.log(output);