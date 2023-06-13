import React from "react";

const Cars = () => {
  const cars = [
    { id: 1, name: "Car 1", model: "Model 1", price: "$20,000" },
    { id: 2, name: "Car 2", model: "Model 2", price: "$25,000" },
    { id: 3, name: "Car 3", model: "Model 3", price: "$30,000" },
  ];

  return (
    <div>
      <h2>Our Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.name} - {car.model} ({car.price})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
