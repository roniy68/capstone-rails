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
    <>
      <div>
        {carAdded && <p className="alert-msg">New car has been added!</p>}{" "}
        <div className="reservation-form-container">
          <h2>Add Car</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={carData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Model:
              <input
                type="text"
                name="model"
                value={carData.model}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Price:
              <input
                type="text"
                name="price"
                value={carData.price}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Description:
              <textarea
                name="description"
                value={carData.description}
                onChange={handleChange}
              ></textarea>
            </label>
            <br />
            <label>
              Photo URL:
              <input
                type="file"
                name="photo"
                value={carData.photo}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit">Add Car</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCar;
