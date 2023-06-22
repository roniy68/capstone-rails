import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BsCaretLeft } from "react-icons/bs";

const CarDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({
    start_date: "",
    end_date: "",
  });

  useEffect(() => {
    const fetchCarDetail = async () => {
      try {
        const [response, userResponse] = await Promise.all([
          fetch(`/api/v1/cars/${id}`),
          fetch("/api/v1/users"),
        ]);
        const [carData, userData] = await Promise.all([
          response.json(),
          userResponse.json(),
        ]);

        if (carData && carData.id && userData && userData.length > 0) {
          const user = userData[0];
          setUserId(user.id);
          setCar(carData);
        } else {
          console.error("Car or user data not available");
        }
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    fetchCarDetail();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReservation = async () => {
    try {
      const response = await fetch("/api/v1/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          car_id: car.id,
          car_name: car.name,
          car_model: car.model,
          start_date: formData.start_date,
          end_date: formData.end_date,
          user_id: userId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.alreadyReserved) {
          alert("The car is already reserved.");
        } else {
          alert("Car reserved successfully.");
          navigate("/myreservations");
        }
      } else {
        const error = await response.text();
        console.error("Error reserving car:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!car) {
    return <p className="text-center text-[#96bf01] text-2xl">Loading...</p>;
  }

  return (
    <div className="shadow flex flex-col lg:flex-row items-center justify-center w-screen h-screen">
      <div className="w-[400px] h-[400px] mr-6">
        <img src={car.photo} alt={car.name} />
      </div>
      <div className="absolute bg-blue-800">
        <button className="bg-[#96bf01] rounded-l-full mr-2 pl-5 lg:mr-6 lg:pl-10 fixed bottom-10 left-0 lg:ml-[320px] md:ml-[200px] sm:ml-[100px]">
          <Link to="/cars">
            <BsCaretLeft
              size={50}
              className="text-white flex items-center justify-center"
            />
          </Link>
        </button>
      </div>
      <div className="p-6 border-2 rounded">
        <div className=" p-10">
          <div className="text-[2rem] lg:text-[3rem] font-bold text-gray-700  flex items-center justify-center mb-6">
            <h2>
              {car.name} - {car.model}
            </h2>
          </div>

          <div className="text-[20px] text-gray-700  flex-col items-center justify-center">
            <p>Price: ${car.price}</p>
            <p>Description: {car.description}</p>
          </div>
          <form onSubmit={handleReservation} className="rform">
            <label className="text-[20px] text-gray-700">
              Start Date:
              <input
                className="text-[20px] text-gray-700"
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="text-[20px] text-gray-700">
              End Date:
              <input
                className="text-[20px] text-gray-700"
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
              />
            </label>
            <br />
            <button
              className="bg-green-400 hover:bg-green-900 hover:text-white rounded p-4 font-bold mt-12"
              type="submit"
            >
              Reserve
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
