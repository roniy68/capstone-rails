import React from "react";
import Navbar from "./fragments/Navbar";
import Footer from "./fragments/Footer";

import Main from "./fragments/Main";

export default () => (
    <>
        {/* Navbar goes here */}
        <Navbar />

        {/* Main Content here */}
        <Main />

        {/* Footer  */}
        <Footer />
    </>
);