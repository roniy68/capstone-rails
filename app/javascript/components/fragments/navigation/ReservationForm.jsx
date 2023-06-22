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
        body: JSON.stringify({
          car_id: formData.car_id,
          car_name: formData.car_name,
          car_model: formData.car_model,
          start_date: formData.start_date,
          end_date: formData.end_date,
          user_id: formData.user_id,
        }),
      });

      if (response.ok) {
        const reservation = await response.json();
        setFormData({
          car_name: "",
          car_model: "",
          start_date: "",
          end_date: "",
          car_id: "",
          user_id: "",
        });

        setReservationStatus("Car reserved successfully!");
      } else {
        const error = await response.json();
        console.error("Error creating reservation:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {reservationStatus && (
        <p className="bg-green-200 font-bold mb-6 p-4 rounded shadow-lg">
          {reservationStatus}
        </p>
      )}
      <div className="h-auto w-auto lg:w-[800px] p-6 bg-slate-300 rounded-lg shadow-lg">
        <h1 className="text-center text-[25px] font-bold mb-6">Add Reservation</h1>
        <form onSubmit={handleSubmit} className="space-y-4 shadow">
          <div>
            <label htmlFor="car_name" className="block mb-1">
              Car Name:
            </label>
            <input
              type="text"
              id="car_name"
              name="car_name"
              value={formData.car_name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="car_model" className="block mb-1">
              Car Model:
            </label>
            <input
              type="text"
              id="car_model"
              name="car_model"
              value={formData.car_model}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="start_date" className="block mb-1">
              Start Date:
            </label>
            <input
              type="date"
              id="start_date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="end_date" className="block mb-1">
              End Date:
            </label>
            <input
              type="date"
              id="end_date"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-auto lg:w-60 p-12 m-12 bg-[#96bf01] hover:bg-green-500 text-white rounded py-2 font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
