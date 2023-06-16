import React from "react";
import Footer from "./fragments/Footer";
import Main from "./fragments/Main";
import Navigation from "./fragments/navigation/Navigation";

export default () => (
  <>
    {/* Navbar goes here */}
    <Navigation />

    {/* Main Content here */}
    <Main />

    {/* Footer */}
    <Footer />
  </>
);
