import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const renderCars = () => {
    const startIndex = currentIndex;
    const endIndex = startIndex + 2;
    return cars.slice(startIndex, endIndex + 1).map((car) => (
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
    ));
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button
          className="text-2xl text-gray-600 hover:text-gray-800"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <MdArrowCircleLeft />
        </button>
        <ul className="flex space-x-4 overflow-x-auto">{renderCars()}</ul>
        <button
          className="text-2xl text-gray-600 hover:text-gray-800"
          onClick={handleNext}
          disabled={currentIndex >= cars.length - 3}
        >
          <MdArrowCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Cars;
