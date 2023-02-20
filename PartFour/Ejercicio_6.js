/*
  006 addProperty

    INSTRUCCIONES:
  1. Escribe una funcion llamada addProperty. Dado un objeto y una key, addProperty agrege la key al objeto con el valor true.
     Luego la funcion tiene que devolver el objeto.

  EJEMPLO:
    let myObj = {};
    addProperty(myObj, 'myProperty');
    console.log(myObj.myProperty); --> True
*/
// Code:

const addProperty = (obj, key) => {
  obj[key] = true;
  return obj;
}

let myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty);
console.log('El Valor del Objeto:\n',myObj);