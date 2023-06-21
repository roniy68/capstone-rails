import React, { useState, useEffect } from "react";

const AddCar = () => {
  const [carData, setCarData] = useState({
    name: "",
    description: "",
    photo: "",
    price: "",
    model: "",
    user_id: null,
  });
  const [carAdded, setCarAdded] = useState(false);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch("/api/v1/cars");
        const cars = await response.json();
        const currentUser = cars[0].user_id;

        setCarData((prevCarData) => ({
          ...prevCarData,
          user_id: currentUser,
        }));
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  const handleChange = (e) => {
    setCarData({
      ...carData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carData),
      });

      if (response.ok) {
        const newCar = await response.json();
        console.log("New car added:", newCar);

        setCarData({
          name: "",
          description: "",
          photo: "",
          price: "",
          model: "",
          user_id: carData.user_id,
        });
        setCarAdded(true);
      } else {
        const error = await response.json();
        console.error("Error adding car:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {carAdded && <p className="bg-green-200 font-bold mb-6 p-4 rounded shadow-lg">New car has been added!</p>}
      <div className="h-auto lg:w-[800px] w-[600px] p-6 bg-slate-300 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4 shadow">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={carData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="model" className="block mb-1">
              Model:
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={carData.model}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="price" className="block mb-1">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={carData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-1">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={carData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            ></textarea>
          </div>
          <div>
            <label htmlFor="photo" className="block mb-1">
              Photo URL:
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              value={carData.photo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />

          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-auto lg:w-60 p-12 m-12 bg-[#96bf01] hover:bg-green-500 text-white rounded py-2 font-bold"
            >
              Add Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;