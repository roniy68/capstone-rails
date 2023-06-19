import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import CarsPage from "../components/pages/CarsPage";
import MyReservationsPage from "../components/pages/MyReservationsPage"
import CarDetailPage from "../components/pages/CarDetailPage";
import ReservationPage from "../components/pages/ReservationPage";
import AddCarPage from "../components/pages/AddCarPage";
import Login from "../components/fragments/login/login";
import Body from "../components/fragments/Initialpage/initial";
import Layout from "../components/fragments/Layout";
import NotFound from "../components/fragments/NotFound";



export default (
  <Router>
    <Routes>
    <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/detail/:id" element={<CarDetailPage />} />
        <Route path="/reserve" element={<ReservationPage />} />
        <Route path="/myreservations" element={<MyReservationsPage />} />
        <Route path="/addcar" element={<AddCarPage />} />
        <Route path="/initial" element={<Body />} />
        {/* More Routes here */}
      </Route>

      {/* Catch  all routes*/}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);