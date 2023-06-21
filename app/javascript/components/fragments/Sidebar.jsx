import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillFacebook, AiFillInstagram, 
AiFillLinkedin } from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx'

const Sidebar = () => {

    return (
      <>
        <div className="side-bar">
          <div className="sidebar-elt">
            <RxCross1 className="close-icone" />
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
