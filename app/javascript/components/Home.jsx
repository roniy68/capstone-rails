import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./fragments/navigation/Navigation";
import Footer from "./fragments/Footer";
import Main from "./fragments/Main";
import ReservationForm from './fragments/navigation/ReservationForm';

export default () => (
  <>
    {/* Navbar goes here */}
    <Routes>
      <Route path="/" element={<Navigation />} />
      <Route path="/reserve" element={<ReservationForm />} />
    </Routes>

    {/* Main Content here */}
    <Main />

    {/* Footer */}
    <Footer />
  </>
);
