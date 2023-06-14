import React, { useState } from "react";
import { connect } from "react-redux";
import { addCar } from "../../redux/actions";
import "./ReservationForm.css";

const AddCar = ({ addCar }) => {
  const [carData, setCarData] = useState({
    name: "",
    model: "",
    price: "",
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar(carData);
    setCarData({ name: "", model: "", price: "", image: null });
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setCarData({
        ...carData,
        image: e.target.files[0],
      });
    } else {
      setCarData({
        ...carData,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="reservation-form-container">
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={carData.name}
            onChange={handleChange}
            placeholder="Enter car's name"
            required
          />
        </div>
        <div>
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={carData.model}
            onChange={handleChange}
            placeholder="Enter car's model"
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={carData.price}
            onChange={handleChange}
            placeholder="Enter car's price"
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default connect(null, { addCar })(AddCar);
