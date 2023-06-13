import React from "react";
import Navigation from "./fragments/navigation/Navigation";
import Footer from "./fragments/Footer";

import Main from "./fragments/Main";

export default () => (
    <>
        {/* Navbar goes here */}
        <Navigation />

        {/* Main Content here */}
        <Main />

        {/* Footer  */}
        <Footer />
    </>
);