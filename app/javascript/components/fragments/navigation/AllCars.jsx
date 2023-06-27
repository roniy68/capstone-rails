import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AllCars = () => {
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

    const handleDelete = async (carId) => {
        try {
            const response = await fetch(`/api/v1/cars/${carId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                // Remove the deleted car from the cars list
                setCars((prevCars) =>
                    prevCars.filter((car) => car.id !== carId)
                );
                alert("Car deleted successfully.");
            } else {
                const error = await response.json();
                alert("Error deleting car:", error);
            }
        } catch (error) {
            alert("Error:", error);
        }
    };


    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(""); // Clear the message after 3 seconds
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    const renderCars = () => {
        const startIndex = currentIndex;
        const endIndex = startIndex + 2;
        return cars
            .slice(startIndex, endIndex + 1)
            .map((car) => (
                <li
  key={car.id}
  className="flex items-center space-x-4 py-4 sm:max-w-600px mx-auto"
  style={{ marginTop: "60px" }}
>
  <Link to={`/detail/${car.id}`} className="flex-shrink-0">
    <img
      src={car.photo}
      alt={car.name}
      className="w-24 h-24 lg:w-52 lg:h-auto object-cover rounded p-2"
    />
  </Link>
  <div className="flex-grow text-center ml-6">
    <p className="text-xl my-2">
      {car.name} - {car.model}
    </p>
  </div>
  <div>
    <button
      type="button"
      onClick={() => handleDelete(car.id)}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-sm text-lg"
    >
      Delete
    </button>
  </div>
</li>
    ));
    };

    return (
        <div className=" flex flex-1 flex-col p-6 items-center w-auto ">
            <div>
                <h1 className="flex items-center justify-center font-bold mt-10 text-5xl">
                    ALL CARS
                </h1>
            </div>

            <div className=" w-auto lg:w-[800px]">
                <ul>{renderCars()}</ul>
            </div>
        </div>
    );
};

export default AllCars;