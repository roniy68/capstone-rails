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
      } else {
        const error = await response.json();
        console.error("Error deleting reservation:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-full overflow-auto p-6">
      <h2 className="text-[40px] font-bold mb-12 flex items-center justify-center">
        My Reservations
      </h2>
      {reservations.length > 0 ? (
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {reservations.map((reservation) => (
            <li
              key={reservation.id}
              className="bg-[#96bf01] mb-6 p-6 rounded shadow-lg flex flex-col justify-center items-center"
            >
              <div className="flex flex-col items-center justify-center">
                <p className="text-[30px] font-bold mb-6">
                  Car Name: {reservation.car_name}
                </p>
                <div className=" text-[20px] p-6 border-t border-white">
                  <p>Car Model: {reservation.car_model}</p>
                  <p>Start Date: {reservation.start_date}</p>
                  <p>End Date: {reservation.end_date}</p>
                </div>
              </div>
              <button
                className="bg-red-400 hover:bg-red-900 hover:text-white rounded p-4 font-bold mt-12"
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
  );
};

export default MyReservations;
