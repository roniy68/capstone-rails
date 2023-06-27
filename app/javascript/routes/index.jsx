import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "../components/pages/Home";
import CarsPage from "../components/pages/CarsPage";
import MyReservationsPage from "../components/pages/MyReservationsPage"
import CarDetailPage from "../components/pages/CarDetailPage";
import ReservationPage from "../components/pages/ReservationPage";
import AddCarPage from "../components/pages/AddCarPage";
import Login from "../components/fragments/login/login";
import Layout from "../components/fragments/Layout";
import NotFound from "../components/fragments/NotFound";
import DeletePage from "../components/pages/DeleteCars";
import PrivateRoutes from "./PrivateRoutes";

const LoginRoute = () => {
  const user = sessionStorage.getItem("username")

  return user ? <Navigate to="/" /> : <Outlet />
}

export default (
  <Router>
    <Routes>
      {/* General Routes */}
      <Route element={<LoginRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        {/* Protected Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/detail/:id" element={<CarDetailPage />} />
          <Route path="/reserve" element={<ReservationPage />} />
          <Route path="/myreservations" element={<MyReservationsPage />} />
          <Route path="/addcar" element={<AddCarPage />} />
          <Route path="/delete" element={<DeletePage />} />
          {/* More Protected Routes here */}
        </Route>
      </Route>


      {/* Catch  all routes*/}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router >
);