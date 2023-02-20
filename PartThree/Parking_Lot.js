/* 
  23. Estacionamiento (Parking Lot)
    Podemos usar un arreglo bidimensional (matriz) para representar el estado actual de un estacionamiento.

    parking_state = [
      [1 , 0 , 1 , 1 , 0 , 1],          1: Occupied
      [2 , 0 , 1 , 1 , 0 , 1],          2: Available
      [1 , 0 , 2 , 1 , 0 , 1],          3: not a parking spot
      [1 , 0 , 1 , 1 , 0 , 2],
      [1 , 0 , 1 , 1 , 0 , 1]
    ]
      
    INSTRUCCIONES:
    
    1. Crea una funcion getParkingLotState() que devuelva un objeto con totalSlots (cantidad total de estacionamientos), 
       availableSlots (estacionamientos disponibles) y occupiedSlots (estacionamientos ocupados) de esta forma:

       const state = {
            totalSlots: 12,
            availableSlots: 3,
            occupiedSlots: 9
       }

       PISTA:
       -> Tienes que hacer un bucle anidado. 

*/

let parking_state = [
  [1,0,1,1,0,1],
  [2,0,1,1,0,1],
  [1,0,2,1,0,1],
  [1,0,1,1,0,2],
  [1,0,1,1,0,1]
];


const getParkingLotState = (value) => {
  
};

getParkingLotState(parking_state);