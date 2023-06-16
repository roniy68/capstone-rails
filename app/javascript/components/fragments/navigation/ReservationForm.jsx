import React, { useState, useEffect } from "react";
import "./ReservationAddForm.css";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    car_name: "",
    car_model: "",
    start_date: "",
    end_date: "",
    car_id: "",
    user_id: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data from the API
        const userResponse = await fetch("/api/v1/users");
        const userData = await userResponse.json();

        // Fetch car data from the API
        const carResponse = await fetch("/api/v1/cars");
        const carData = await carResponse.json();

        // Set the user_id and car_id in the form data
        setFormData((prevFormData) => ({
          ...prevFormData,
          car_id: carData.id,
          user_id: userData.id,
        }));
      } catch (error) {
        console.error("Error fetching user and car data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reservation: formData }),
      });

      if (response.ok) {
        const reservation = await response.json();
        console.log("Reservation created:", reservation);
        setFormData({
          car_name: "",
          car_model: "",
          start_date: "",
          end_date: "",
          car_id: "",
          user_id: "",
        });
      } else {
        const error = await response.json();
        console.error("Error creating reservation:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="reservation-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Car Name:
          <input
            type="text"
            name="car_name"
            value={formData.car_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Car Model:
          <input
            type="text"
            name="car_model"
            value={formData.car_model}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            name="end_date"
            value={formData.end_date}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReservationForm;
