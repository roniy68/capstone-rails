import React from "react";
import Footer from "./fragments/Footer";
import Main from "./fragments/Main";
import Navigation from "./fragments/navigation/Navigation";
import Cars from "./fragments/navigation/Cars";

export default () => (
  <>
    {/* Navbar goes here */}
    <Cars />

    {/* Main Content here */}
    <Main />

    {/* Footer */}
    <Footer />
  </>
);
