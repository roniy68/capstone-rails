import React from 'react';
import logo from '../../../assets/images/RENTCAR.png'
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillFacebook, AiFillInstagram, 
AiFillLinkedin } from 'react-icons/ai'

const Sidebar = () => {

    return (
      <>
        <div className="side-bar">
          <div className="logo">
            <img src={logo} alt="logo" height="10px" />
          </div>
          <div>
            <ul className="py-4 flex-1 navbar-links">
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
          </div>

          <div className="social-media">
            <AiFillGithub />
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillLinkedin />
          </div>
        </div>
      </>
    );
}

export default Sidebar
