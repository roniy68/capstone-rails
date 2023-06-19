import React from 'react';
import logo from '../../../assets/images/murple_logo.png'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <>
            <div className="flex flex-col bg-neutral-200 p-3 lg:w-[400px] border-r border-red-400">

                <div className="mb-20 p-10 bg-red-300 rounded-full">
                    <img src={logo} alt="logo" height="10px" />
                </div>

                <ul className="py-4 flex-1 bg-red-500">
                    <Link to="/cars">
                        <li className="px-4 py-2">MODELS</li>
                    </Link>
                    <Link to="/reserve">
                        <li className="px-4 py-2">ADD RESERVATION</li>
                    </Link>
                    <Link to="/addcar">
                        <li className="px-4 py-2">ADD CAR</li>
                    </Link>
                    <Link to="/myreservations">
                        <li className="px-4 py-2">MY RESERVATIONS</li>
                    </Link>
                </ul>
                <div className="mt-6 bg-red-500">
                    <ul className='flex p-6 justify-around'>
                        <li>FB</li>
                        <li>GH</li>
                        <li>FB</li>
                        <li>GH</li>
                    </ul>
                </div>

            </div>
        </>
    )

}

export default Sidebar
