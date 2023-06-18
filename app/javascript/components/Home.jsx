import React from "react";
import Footer from "./fragments/Footer";
import Main from "./fragments/Main";
import Navigation from "./fragments/navigation/Navigation";
import Cars from "./fragments/navigation/Cars";
import Sidebar from "./fragments/Sidebar";

export default () => (
  <>
    <div className="bg-gray-100">

      <div className="flex">
        {/* Sidebar */}

        <Sidebar />
        {/* Main Content */}
        <div className="flex w-3/4 bg-white p-4 h-screen items-center justify-center">
          <Cars />
        </div>
      </div>

    </div>

    {/* Navbar goes here */}
    {/* <Navigation /> */}

    {/* Main Content here */}
    {/* <Main /> */}

    {/* Footer */}
    {/* <Footer /> */}
  </>
);
