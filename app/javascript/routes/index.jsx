import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import ReservationForm from "../components/fragments/navigation/ReservationForm"
import AddCar from "../components/fragments/navigation/AddCar";
import Cars from "../components/fragments/navigation/Cars";
import MyReservations from "../components/fragments/navigation/MyReservations";
import CarDetail from "../components/fragments/navigation/CarDetail";


export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/detail/:id" element={<CarDetail />} />
      <Route path="/reserve" element={<ReservationForm />} />
      <Route path="/myreservations" element={<MyReservations />} />
      <Route path="/addcar" element={<AddCar />} />
      {/* More Routes here */}
    </Routes>
  </Router>
);