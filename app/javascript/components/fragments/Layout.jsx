import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex h-screen">
                <div className="block w-1/3 lg:w-1/5 bg-red-600 text-[#444444] h-screen mb-[200px]">
                    <Sidebar />
                </div>
                <div className="flex bg-gray-500 w-full h-full">

                    <div className="flex flex-col items-center">
                        <div className="bg-blue-500 h-auto">
                            Navbar top eited
                        </div>
                        <div className=''>
                            {/* Children Goes Here */}
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
