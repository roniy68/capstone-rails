import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCar } from '../../redux/actions';

const AddCar = ({ addCar }) => {
const [carData, setCarData] = useState({
name: '',
model: '',
price: '',
});

const handleSubmit = (e) => {
e.preventDefault();
addCar(carData);
setCarData({ name: '', model: '', price: '' });
};

const handleChange = (e) => {
setCarData({
...carData,
[e.target.name]: e.target.value,
});
};

return (
<div>
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
         placeholder="Car name"
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
         placeholder="Car model"
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
         placeholder="Car price"
         required
       />
</div>
<button type="submit">Add</button>
</form>
</div>
);
};

export default connect(null, { addCar })(AddCar);