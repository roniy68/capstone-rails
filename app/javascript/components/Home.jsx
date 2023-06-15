import React from "react";
import Footer from "./fragments/Footer";
import Main from "./fragments/Main";
import Login from "./fragments/login/Login";
import Cars from "./fragments/navigation/Cars";

export default () => (
  <>
    <Login/>
    {/* Navbar goes here */}
    <Cars />

    {/* Main Content here */}
    <Main />
    <Footer />
  </>
);
