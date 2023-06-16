import React from "react";
import "./OurCars.css";

const Cars = () => {
  const cars = [
    {
      id: 1,
      name: "Car 1",
      model: "Model 1",
      price: "$20,000",
      image: "rentingCars.jpg",
    },
    {
      id: 2,
      name: "Car 2",
      model: "Model 2",
      price: "$25,000",
      image: "rentingCars.jpg",
    },
    {
      id: 3,
      name: "Car 3",
      model: "Model 3",
      price: "$30,000",
      image: "rentingCars.jpg",
    },
  ];

  return (
    <div className="cars-container">
      <h2>Our Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <img src={car.image} alt={car.name} />
            <div>
              <p>
                {car.name} - {car.model}
              </p>
              <p>{car.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
