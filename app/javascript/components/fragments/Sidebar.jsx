import React from 'react';
import logo from '../../../assets/images/logo.jpg'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGithub, FaPinterestP } from 'react-icons/fa'
import { TiSocialGooglePlus } from 'react-icons/ti'
const Sidebar = () => {

  const links = [
    {
      url: "/cars",
      label: "MODELS"
    },
    {
      url: "/reserve",
      label: "RESERVE"
    },
    {
      url: "/addcar",
      label: "ADD CAR"
    },
    {
      url: "/myreservations",
      label: "RESERVATIONS"
    }
  ]
  return (
    <>
      <div id="sidebar" className='hidden md:flex flex-col bg-white pl-12 lg:w-[400px] border-r border-gray-400 transition ease-in delay-300'>
        {/* className={`${hide ? "hidden transition ease-in delay-300 md:flex flex-col bg-white pl-12 lg:w-[400px] border-r border-gray-400" : 'hidden'}`} */}
        <div className=" rounded-full">
          <Link to="/">
            <img className='h-[200px] w-[200px] ' src={logo} alt="logo" height="5px" />
          </Link>
        </div>

        <ul className="mt-60 py-4 font-bold flex-1 ">
          {
            links.map((link) => (
              <Link to={link.url}>
                <li className="p-4 text-[20px] lg:text-[30px] hover:bg-[#96bf01] hover:text-white rounded-md">{link.label}</li>
              </Link>
            ))
          }
        </ul>
        <div className="mt-6">
          <ul className='flex p-6 justify-around'>
            <li><FaFacebookF /></li>
            <li><FaTwitter /></li>
            <li><TiSocialGooglePlus /></li>
            <li><FaPinterestP /></li>
            <li><FaGithub /></li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Sidebar
