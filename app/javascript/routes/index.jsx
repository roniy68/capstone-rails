import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import ReservationForm from "../components/fragments/navigation/ReservationForm"

export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reserve" component={ReservationForm} />
            
            {/* More Routes here */}
        </Routes>
    </Router>
);