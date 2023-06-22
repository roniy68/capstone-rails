import React, { useState } from 'react'
import { HiOutlineMenu, HiAnnotation, HiBell, HiOutlineUser } from 'react-icons/hi'

const NavBar = ({ handleClick }) => {

    return (
        <div className="flex bg-slate-200 lg:h-[80px] md:h-[60px] p-4 sticky top-0 z-10 items-center justify-between">
            {/* Navbar Ham burger */}
            <div className='flex-none' onClick={handleClick}>
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
    )
}

export default NavBar
