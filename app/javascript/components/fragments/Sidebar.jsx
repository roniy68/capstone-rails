import React from 'react';
import { TbBrandGraphql } from 'react-icons/tb';

const Sidebar = () => {
    return (
        <div className="w-2/5 bg-white text-[#444444] h-screen mb-[200px]">
            <div className="p-4">
                <h1 className="text-xl font-bold">
                    <TbBrandGraphql size={'80px'} />
                </h1>
            </div>

            <ul className="py-4">
                <li className="px-4 py-2 hover:bg-green-700">MODELS</li>
                <li className="px-4 py-2 hover:bg-green-700">RESERVATIONS</li>
                <li className="px-4 py-2 hover:bg-green-700">ADD CAR</li>
                <li className="px-4 py-2 hover:bg-green-700">MY RESERVATIONS</li>
            </ul>
        </div>
    )
}

export default Sidebar
