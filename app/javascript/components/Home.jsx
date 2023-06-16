import React from "react";
import Footer from "./fragments/Footer";
import Main from "./fragments/Main";
import Navigation from "./fragments/navigation/Navigation";
import MyReservations from "./fragments/navigation/MyReservations";

export default () => (
  <>
    {/* Navbar goes here */}
    <MyReservations />

    {/* Main Content here */}
    <Main />

    {/* Footer */}
    <Footer />
  </>
);
