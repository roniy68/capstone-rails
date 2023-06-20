import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div className="flex bg-neutral-100 h-screen w-sreen overflow-hidden">
                <Sidebar />
                <div className="flex bg-gray-500 w-full h-full">

                    <div className="flex flex-1 flex-col">
                        <div className="flex bg-red-500 h-[100px] p-4 sticky top-0 z-10 items-center justify-between">
                            <div className='flex-none bg-green-600 rounded-full'>
                                Hamburger
                            </div>
                            <div className='flex justify-end flex-auto gap-2 bg-green-600'>
                                <div>
                                    Notifications
                                </div>
                                <div>
                                    Messeges
                                </div>
                                <div>
                                    Profile
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
