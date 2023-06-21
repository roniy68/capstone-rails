import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill, BsThreeDots } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { useLocation } from "react-router-dom";


const Cars = () => {
  const [cars, setCars] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const [message, setMessage] = useState(location?.state?.message || "");
  const Navigate = useNavigate();

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

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(""); // Clear the message after 3 seconds
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const renderCars = () => {
    const startIndex = currentIndex;
    const endIndex = startIndex + 2;

    if (cars.length === 0) {
      return <p >No car is present.</p>;
    }

    return cars
      .slice(startIndex, endIndex + 1)
      .map((car) => (
        <li key={car.id} className="car-card">
          {/* Rest of your code */}
        </li>
      ));
  };

  return (
    <div className="container mx-auto" style={{ marginTop: "-100px" }}>
      <div className="car-title">
        {message && (
          <p style={{ color: "black", textAlign: "center", fontSize: "larger", fontWeight: "bold", float: "right" }}>{message}</p>
        )}
        <h1>LATEST MODELS</h1>
        <p>Please select a renting car Model</p>
      </div>

      <div className="carousel">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          <BsArrowLeftSquareFill />
        </button>
        <ul>{renderCars()}</ul>
        <button
          onClick={handleNext}
          disabled={currentIndex >= cars.length - 3}
        >
          <BsArrowRightSquareFill />
        </button>
      </div>
    </div>
  );
};

export default Cars;
