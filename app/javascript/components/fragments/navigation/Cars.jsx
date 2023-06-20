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
    <div className="flex bg-red-500 h-screen items-center justify-center">

      <ul className="bg-blue-500 flex">
        {cars.map((car) => (
          <li className="flex-1 bg-green-500 p-6" key={car.id}>
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
  );
};

export default Cars;
