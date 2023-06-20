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

  const handleDelete = async (reservationId) => {
    try {
      const response = await fetch(`/api/v1/reservations/${reservationId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove the deleted reservation from the reservations list
        setReservations((prevReservations) =>
          prevReservations.filter(
            (reservation) => reservation.id !== reservationId
          )
        );
        console.log("Reservation deleted successfully.");
      } else {
        const error = await response.json();
        console.error("Error deleting reservation:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="my-reservations-container">
        <h2>My Reservations</h2>
        {reservations.length > 0 ? (
          <ul className="reservation-list">
            {reservations.map((reservation) => (
              <li key={reservation.id} className="reservation-card">
                <div className="card-content">
                  <p>Car Name: {reservation.car_name}</p>
                  <p>Car Model: {reservation.car_model}</p>
                  <p>Start Date: {reservation.start_date}</p>
                  <p>End Date: {reservation.end_date}</p>
                </div>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(reservation.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="alert">No reservations found!</p>
        )}
      </div>
    </div>
  );
};

export default MyReservations;
