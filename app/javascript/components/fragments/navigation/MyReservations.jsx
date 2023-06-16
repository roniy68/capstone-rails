import React, { useState, useEffect } from "react";

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Fetch the user's reservations from the API
    const fetchReservations = async () => {
      try {
        const response = await fetch("/api/v1/reservations");
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <h2>My Reservations</h2>
      {reservations.length > 0 ? (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.id}>
              <p>Car Name: {reservation.car_name}</p>
              <p>Car Model: {reservation.car_model}</p>
              <p>Start Date: {reservation.start_date}</p>
              <p>End Date: {reservation.end_date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reservations found!</p>
      )}
    </div>
  );
};

export default MyReservations;
