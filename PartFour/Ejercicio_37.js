/*
  037 addArrayProperty

    INSTRUCCIONES:
  1. Escribe una funcion llamada addArrayProperty. Dado un objeto, una key y un array, addArrayProperty establece una nueva propiedad en el
     objeto con la key dada, cuyo valor debe ser el array dado.

  EJEMPLO: 
    let obj = {};
    let mayArray = [1,3];
    addArrayProperty(myObj, 'myProperty', myArray);
    console.log(myObj.myProperty); --> [1,3]
*/
// Code:

const addArrayProperty = (obj, key, arr) => {
 return obj[key] = arr;
}

let myObj = {};
let myArray = [1,3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj);
console.log(myObj.myProperty);