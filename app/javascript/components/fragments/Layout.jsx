import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div className="flex bg-neutral-100 h-screen w-sreen overflow-hidden">
                <Sidebar />
                <div className="flex bg-gray-500 w-full h-full">

                    <div className="flex flex-col items-center">
                        <div className="bg-blue-500 mb-12">
                            Navbar top eited
                        </div>
                        <div className='flex flex-col p-6'>
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
