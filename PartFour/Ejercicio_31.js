/*
  031 addFullNameProperty

    INSTRUCCIONES:
  1. Escribe una funcion llamada addFullNameProperty. Dado un objeto que tiene una propiedad firstName y una propidad lastName,
     addFullNameProperty agrega la propiedad fullName al objeto, su valor es un String con el nombre y el apellido separados por 
     un espacio.

  EJEMPLO:
    let person = {
      firstName: 'Jade',
      lastName: 'Smith'
    };

    addFullNameProperty(person);
    console.log(person.fullName); --> Jade Smith
*/
// Code:

function addFullNameProperty (obj) {
  obj.fullName = `${obj.firstName} ${obj.lastName}`;
  return obj;
}

let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

console.log(person);

addFullNameProperty(person);

console.log(person);
console.log(`
El Nombre Completo es: ${person.fullName}
`);
