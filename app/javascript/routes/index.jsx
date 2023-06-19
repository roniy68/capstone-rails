import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import CarsPage from "../components/pages/CarsPage";
import MyReservationsPage from "../components/pages/MyReservationsPage"
import CarDetailPage from "../components/pages/CarDetailPage";
import ReservationPage from "../components/pages/ReservationPage";
import AddCarPage from "../components/pages/AddCarPage";


export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<CarsPage />} />
      <Route path="/detail/:id" element={<CarDetailPage />} />
      <Route path="/reserve" element={<ReservationPage />} />
      <Route path="/myreservations" element={<MyReservationsPage />} />
      <Route path="/addcar" element={<AddCarPage />} />
      {/* More Routes here */}
    </Routes>
  </Router>
);