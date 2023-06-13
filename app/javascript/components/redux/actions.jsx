export const RESERVE_CAR = 'RESERVE_CAR';
export const ADD_CAR = 'ADD_CAR';
export const DELETE_CAR = 'DELETE_CAR';

export const reserveCar = (reservation) => ({
  type: RESERVE_CAR,
  payload: reservation,
});

export const addCar = (car) => ({
  type: ADD_CAR,
  payload: car,
});

export const deleteCar = (carId) => ({
  type: DELETE_CAR,
  payload: carId,
});