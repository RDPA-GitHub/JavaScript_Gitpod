/*
  032 addObjectProperty

    INSTRUCCIONES:
  1. Escribe una funcion llamada addObjectProperty. Dados dos objetos y una clave(key), addObjectProperty establece una propiedad en el
     primer objeto en la clave(key) dada. El valor de esa nueva propiedad es todo el segundo objeto.

  EJEMPLO:
    let person1 = {
      name: 'Joe Blow',
      role: 'schlub'
    };

    let person2 = {
      name: 'Mr. Burns',
      role: 'supervisor'
    };

    addObjectProperty(person1, 'manager', person2);
    console.log(person1.manager); --> {name: 'Mr. Burns', role: 'supervisor}
*/
// Code:

const addObjectProperty = (obj1, key, obj2) => {
  obj1[key] = obj2;

  return obj1;
}

let person1 = {
  name: 'Joe Blow',
  role: ' schlub'
};

let person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};


addObjectProperty(person1, 'manager', person2);
console.log("\nLa Nueva Propiedad es:\n", person1.manager, "\n");