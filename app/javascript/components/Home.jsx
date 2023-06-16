import React from "react";
import Footer from "./fragments/Footer";
import Main from "./fragments/Main";
import Cars from "./fragments/navigation/Cars";
import Body from "./fragments/Initialpage/initial";

export default () => (
  <>
    {/* Navbar goes here */}
    <Cars />

    {/* Main Content here */}
    <Main />
    <Footer />
  </>
);
