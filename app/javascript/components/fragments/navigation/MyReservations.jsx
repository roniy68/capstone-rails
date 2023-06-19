import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";

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
    <div className="container mx-auto">
      <div className="my-8">
        <h2 className="text-2xl font-bold m-6">My Reservations</h2>
        {reservations.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {reservations.map((reservation) => (
              <li
                key={reservation.id}
                className="border border-gray-300 rounded p-4 shadow"
              >
                <div className="card-content">
                  <p className="font-semibold">
                    Car Name: {reservation.car_name}
                  </p>
                  <p>Car Model: {reservation.car_model}</p>
                  <p>Start Date: {reservation.start_date}</p>
                  <p>End Date: {reservation.end_date}</p>
                </div>
                <button
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleDelete(reservation.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reservations found!</p>
        )}
      </div>
    </div>
  );
};

export default MyReservations;
