import React, { useState, useEffect } from "react";


const ReservationForm = () => {
  const [formData, setFormData] = useState({
    car_name: "",
    car_model: "",
    start_date: "",
    end_date: "",
    car_id: "",
    user_id: "",
  });

  const [reservationStatus, setReservationStatus] = useState(null);

  useEffect(() => {
    // Fetch user and car data
    const fetchUserData = async () => {
      try {
        const [userResponse, carResponse] = await Promise.all([
          fetch("/api/v1/users"),
          fetch("/api/v1/cars"),
        ]);
        const [userData, carData] = await Promise.all([
          userResponse.json(),
          carResponse.json(),
        ]);

        if (userData.length > 0 && carData.length > 0) {
          const user = userData[0];
          const car = carData[0];

          setFormData((prevFormData) => ({
            ...prevFormData,
            car_id: car.id,
            user_id: user.id,
          }));
        } else {
          console.error("User or car data not available");
        }
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

        setReservationStatus("Reservation has been performed.");
      } else {
        const error = await response.json();
        console.error("Error creating reservation:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-red-500 h-screen flex items-center justify-center">
      {reservationStatus && <p className="alert-msg">{reservationStatus}</p>}
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
    </div>
  );
};

export default ReservationForm;
