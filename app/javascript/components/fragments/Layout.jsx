import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";

const Layout = () => {
    return (
      <>
          <div className="main-container">
            <div className="navbar-top">
              <div className="logo-ham">
                <GiHamburgerMenu className="menu-icons" />
                <div className="logo">
                  <p>RENTCAR</p>
                </div>
              </div>
              <AiOutlineLogout className="menu-icons" />
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
