import React from 'react'
import Sidebar from './Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";

const Layout = () => {
  const Navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("username");
    Navigate("/login", { state: { message: "Signed out successfully" } });
  };
    return (
      <>
          <div className="main-container">
            <div className="navbar-top">
              <div className="logo-ham">
                <GiHamburgerMenu className="menu-icons"  />
                <div className="logo">
                  <p>RENTCAR</p>
                </div>
              </div>
              <AiOutlineLogout className="menu-icons" onClick={handleLogout} />
            </div>

            <Sidebar />

            <div className="outlet">
              {/* Children Goes Here */}
              {<Outlet />}
            </div>
          </div>
      </>
    );
}

export default Layout
