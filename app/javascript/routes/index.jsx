import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import ReservationForm from "../components/fragments/navigation/ReservationForm"
import AddCar from "../components/fragments/navigation/AddCar";
import Cars from "../components/fragments/navigation/Cars";
import MyReservations from "../components/fragments/navigation/MyReservations";
import Login from "../components/fragments/login/login";
import Body from "../components/fragments/Initialpage/initial";


export default (
  <Router>
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/home" element={<Home />} />
      <Route path="/reserve" component={ReservationForm} />
      <Route path="/addcar" component={AddCar} />
      <Route path="/cars" component={Cars} />
      <Route path="/myreservations" component={MyReservations} />
      <Route path="/login" element={<Login />} />
      {/* More Routes here */}
    </Routes>
  </Router>
);