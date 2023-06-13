import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteCar } from "../../redux/actions";
import DeleteCar from "./DeleteCar";

const MyReservations = ({ deleteCar }) => {
  const reservations = [
    {
      id: 1,
      car: {
        name: "Car 1",
        model: "Model 1",
      },
      startDate: "2023-06-01",
      endDate: "2023-06-05",
      price: 100,
    },
    {
      id: 2,
      car: {
        name: "Car 2",
        model: "Model 2",
      },
      startDate: "2023-06-05",
      endDate: "2023-06-10",
      price: 150,
    },
  ];

  const handleDelete = (carId) => {
    deleteCar(carId);
  };

  return (
    <div>
      <h2>My Reservations</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            Car: {reservation.car.name}, Model: {reservation.car.model} <br />
            Start Date: {reservation.startDate}, End Date: {reservation.endDate}{" "}
            <br />
            Price: ${reservation.price}
            <DeleteCar carId={reservation.id} handleDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(null, { deleteCar })(MyReservations);
