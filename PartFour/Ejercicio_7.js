/*
  007 removeProperty
  
    INSTRUCCIONES:
  1. Escribe una funcion llamada removeProperty. Dado un objeto y una key, removeProperty elimina esa llave de ese objeto dado.

  EJEMPLO: 
    let obj = {
      name: 'Sam',
      age: 20
    };

    removeProperty(obj, 'name');
    console.log(obj.name); --> undefined

  PISTA:
  -> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/delete
*/
// Code:

const removeProperty = (obj, key) => {
  delete obj[key];
  return obj;
}

let obj = {
  name: 'Sam',
  age: 20
};

// Objeto antes de pasar por la funcion removeProperty
console.log('Antes: ', obj);

removeProperty(obj, 'name');
// Revisamos el valor de la propiedad desde la consola
console.log(obj.name);

// Objeto despues de pasar por la funcion removeProperty
console.log('Despues: ', obj);