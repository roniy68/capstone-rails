import React from "react";
import { connect } from "react-redux";
import { deleteCar } from "../../redux/actions";

const DeleteCar = ({ deleteCar, cars }) => {
  const handleDelete = (carId) => {
    deleteCar(carId);
  };

  return (
    <div>
      <h2>Delete Car</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.name}{" "}
            <button onClick={() => handleDelete(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};

export default connect(mapStateToProps, { deleteCar })(DeleteCar);
