import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdOutlinePaid } from "react-icons/md";
import { MdArticle } from "react-icons/md";

const CarDetailPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCarDetail = async () => {
      try {
        const response = await fetch(`/api/v1/cars/${id}`);
        const data = await response.json();
        setCar(data);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    fetchCarDetail();
  }, [id]);

  if (!car) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-green-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-lg mx-auto shadow">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <h2 className="text-2xl font-bold mb-4">
            {car.name} - {car.model}
          </h2>
          <img src={car.image} alt={car.name} className="w-full" />
          <div className="p-4">
            <p className="flex items-center">
              <MdOutlinePaid className="mr-2" />${car.price}
            </p>
            <p className="flex items-center">
              <MdArticle className="mr-2" />
              {car.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
