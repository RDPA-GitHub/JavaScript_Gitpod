/*
  005 getProperty

    INSTRUCCIONES:
  1. Escribe una funcion llamada getProperty. Dado un objeto y un key, getProperty retorna el valor de la propiedad con esa key.

  EJEMPLO:
   let car = {
    model: 'Toyota'
   };

   let output = getProperty(car, 'model');
   console.log(output);

  PISTA:
  -> Si no hay una propiedad en esa key, deberia retornar undefined.
*/
// Code:

const getProperty = (obj, key) => {
  return obj[key];
}

let car = {
  marca: 'Nissan',
  model: 'Skyline'
};

let output = getProperty(car, 'marca');
console.log(output);
console.log(getProperty(car, 'model'))