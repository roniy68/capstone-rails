import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
// import NavBar from './NavBar'
import { HiOutlineMenu, HiAnnotation, HiBell, HiOutlineUser } from 'react-icons/hi'

const Layout = () => {
    const [show, setShow] = useState(true)

    const handleClick = (e) => {
        setShow(current => !current)
    }

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
                        <div className="flex bg-slate-200 lg:h-[80px] md:h-[60px] p-4 sticky top-0 z-10 items-center justify-between">
                            {/* Navbar Ham burger */}
                            <div onClick={handleClick} className='flex-none'>
                                <HiOutlineMenu size={36} />
                            </div>
                            {/* Navbar Menus */}
                            <div className='flex justify-end flex-auto gap-2'>

                                <div className='p-6'>
                                    <HiBell size={36} />
                                </div>
                                <div className='p-6'>
                                    <HiAnnotation size={36} />
                                </div>
                                <div className='p-6'>
                                    <HiOutlineUser size={36} />
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
