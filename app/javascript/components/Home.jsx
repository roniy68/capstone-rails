import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login";

export default () => (
    <>
        <Navbar />
        <div className="bg-slate-100 p-8 dark:bg-slate-800"> Hello From React</div>

        <Login />
        <Footer />
    </>
);