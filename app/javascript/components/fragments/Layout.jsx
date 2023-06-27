import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
// import NavBar from './NavBar'
import { HiOutlineMenu, HiAnnotation, HiOutlineUser } from 'react-icons/hi'
import { AiOutlineLogout } from "react-icons/ai";

const Layout = () => {
  const [show, setShow] = useState(false)

  const handleClick = (e) => {
    setShow(current => !current)
  }

  // Logout Handle
  const Navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("username");
    Navigate("/login", { state: { message: "Signed out successfully" } });
  };

  useEffect(() => {
    const sidebar = document.getElementById('sidebar')
    if (show) {
      sidebar.style.display = 'flex'
    } else {
      sidebar.style.display = 'none'
    }

  }, [show])

  return (
    <>
      <div className="flex bg-neutral-100 h-screen w-sreen overflow-hidden ">
        <Sidebar />
        <div className="flex bg-gray-500 w-full h-full">

          <div className="flex flex-1 flex-col">
            {/* Navbar */}
            <div className="flex bg-[#96bf01] lg:h-[80px] md:h-[60px] p-4 sticky top-0 z-10 items-center justify-between">
              {/* Navbar Ham burger */}
              <div onClick={handleClick} className='flex-none text-white'>
                <HiOutlineMenu size={30} />
              </div>
              {/* Navbar Menus */}
              <div className='flex text-slate-50 justify-end flex-auto gap-2'>
                <div className='p-6'>
                  <HiAnnotation size={30} />
                </div>
                <div className='p-6'>
                  <HiOutlineUser size={30} />
                </div>

                <div className='p-6'>
                  <AiOutlineLogout size={30} onClick={handleLogout} />
                </div>
              </div>
            </div>

            <div className=' bg-white h-screen flex flex-col p-6 overflow-y-auto scroll-smooth'>
              {/* Children Goes Here */}
              {<Outlet />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
