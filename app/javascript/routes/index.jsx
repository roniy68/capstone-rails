import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import ReservationForm from "../components/fragments/navigation/ReservationForm"
import AddCar from "../components/fragments/navigation/AddCar";

export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reserve" component={ReservationForm} />
            <Route path="/addcar" component={AddCar} />
            {/* More Routes here */}
        </Routes>
    </Router>
);