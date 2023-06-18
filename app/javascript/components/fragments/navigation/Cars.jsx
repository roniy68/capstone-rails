import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <div>
      <div className="container ">
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              <Link to={`/detail/${car.id}`}>
                <img src={car.image} alt={car.name} />
                <div>
                  <p>
                    {car.name} - {car.model}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cars;
