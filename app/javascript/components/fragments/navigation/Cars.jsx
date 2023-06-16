import React, { useState, useEffect } from "react";
import "./navigationStyle/OurCars.css";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("/api/v1/cars");
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

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
              <p>Price: ${car.price}</p>
              <p>Description: {car.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
