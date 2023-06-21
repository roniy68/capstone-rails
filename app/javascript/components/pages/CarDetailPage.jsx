import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BiLeftArrow } from "react-icons/bi";


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
    return <p>Loading...</p>;
  }

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <>
    <button style={{color:"black", float:"left", marginTop:"30%"}}className="back-button" onClick={handleGoBack}>
          <BiLeftArrow/> 
          
          </button>
    <div className="detail-image">
    <img style={{height:"600px", width: "800px"}} src={car.photo} alt={car.name} />
    </div>
      <div className="detail-container">
        <div className="card">
          <h2>
            {car.name} - {car.model}
          </h2>
          </div>
          
          <div className="desc">
            <p>Price: ${car.price}</p>
            <p>Description: {car.description}</p>
          </div>
          <form onSubmit={handleReservation} className="rform">
            <label className="date">
              Start Date:
              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="date">
              End Date:
              <input
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
              />
            </label>
            <br />
            <button className="reserve-button" type="submit">
              Reserve
            </button>
          </form>
          
      </div>
      
      </>
  
  );
};

export default CarDetailPage;
