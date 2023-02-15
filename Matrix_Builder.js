/*
  22. Matrix Builder

    Reconstruyendo cualiciones en la Matrix

    Despues de un codigo malicioso, creado principalmente por el Sr. Smith, la Matrix tiene un hueco enorme y necesita ayuda para reconstruirse.
    Crea una Arreglo/Matriz con 0s (Ceros) y 1s (Unos) aleatorios basados en un parametro.

    INSTRUCCIONES:

      1. Crea una funcion llamada matrixBuilder, que esperara 1 parametro (Un Entero). Este numero representa la cantidad de filas y columnas para la 
      matriz.

        Ejemplo:

          [
            [0,1,1],
            [1,0,1],
            [0,0,0]
          ]

      Recuerda que los 1s (Unos) y 0s (Ceros)
  */

let array = [];

const matrixBuilder = (value) => {
  for (let i = 0; i < value; i++) {
    array[i] = []; // Genera 

    for (let j = 0; j < value; j++) {
      array[i][j] = Math.floor(Math.random()*2);
    }
    
  }
  return array;
}

console.log(matrixBuilder(6));