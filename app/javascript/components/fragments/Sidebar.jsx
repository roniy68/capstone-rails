import React from 'react';
import logo from '../../../assets/images/murple_logo.png'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="mb-20 p-10 bg-red-300 rounded-full">
                <img src={logo} alt="logo" height="10px" />
            </div>

            <ul className="py-4">
                <Link to="/cars">
                    <li className="px-4 py-2 hover:bg-green-700">MODELS</li>
                </Link>
                <Link to="/reserve">
                    <li className="px-4 py-2 hover:bg-green-700">ADD RESERVATION</li>
                </Link>
                <Link to="/addcar">
                    <li className="px-4 py-2 hover:bg-green-700">ADD CAR</li>
                </Link>
                <Link to="/myreservations">
                    <li className="px-4 py-2 hover:bg-green-700">MY RESERVATIONS</li>
                </Link>
            </ul>
        </>
    )
}

export default Sidebar
