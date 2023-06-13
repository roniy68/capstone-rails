import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import ReservationForm from "../components/fragments/navigation/ReservationForm"
import AddCar from "../components/fragments/navigation/AddCar";
import Cars from "../components/fragments/navigation/Cars";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reserve" component={ReservationForm} />
      <Route path="/addcar" component={AddCar} />
      <Route path="/cars" component={Cars} />
      {/* More Routes here */}
    </Routes>
  </Router>
);