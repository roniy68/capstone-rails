import React, { useState } from "react";
import axios from "axios";
import "./ReservationAddForm.css";

const ReservationForm = () => {
  const [carName, setCarName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reservationData = {
        reservation: {
          car_name: carName,
          car_model: carModel,
          start_date: startDate,
          end_date: endDate,
        },
      };

      const response = await axios.post(
        "/api/v1/reservation/create",
        JSON.stringify(reservationData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Reservation created:", response.data);

      setCarName("");
      setCarModel("");
      setStartDate("");
      setEndDate("");
    } catch (error) {
      console.error("Error creating reservation:", error);
    }
  };

  return (
    <div className="reservation-form-container">
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="carName">Car Name:</label>
          <input
            type="text"
            id="carName"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            placeholder="Enter car's name"
            required
          />
        </div>
        <div>
          <label htmlFor="carModel">Car's model:</label>
          <input
            type="text"
            id="carModel"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            placeholder="Enter car's model"
            required
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default ReservationForm;
