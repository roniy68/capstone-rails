import React, { useState } from 'react';
import { connect } from 'react-redux';
import { reserveCars } from '../../redux/actions';

const ReservationForm = ({ cars, reserveCars }) => {
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    reserveCars({ carName, carModel, startDate, endDate, price });
    setCarName('');
    setCarModel('');
    setStartDate('');
    setEndDate('');
    setPrice('');
  };

  return (
    <div>
      <h2>Reserve Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="carName">Car Name:</label>
          <input
            type="text"
            id="carName"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="carModel">Car's model:</label>
          <select
            id="carModel"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            required
          >
            <option value="" disabled>Select a model</option>
            <option value="s239">s239</option>
            <option value="rt20">rt20</option>
            <option value="s560">s560</option>
          </select>
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
        <div>
          <label htmlFor="price">Price:</label>
          <select
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          >
            <option value="" disabled>Select a price</option>
            <option value="100">$100</option>
            <option value="150">$150</option>
            <option value="200">$200</option>
          </select>
        </div>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cars: state.cars
});

export default connect(mapStateToProps, { reserveCars })(ReservationForm);
