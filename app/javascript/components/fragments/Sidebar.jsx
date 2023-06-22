import React from "react";
import logo from "../../../assets/images/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGithub, FaPinterestP } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    {
      url: "/cars",
      label: "MODELS",
    },
    {
      url: "/reserve",
      label: "RESERVE",
    },
    {
      url: "/addcar",
      label: "ADD CAR",
    },
    {
      url: "/myreservations",
      label: "RESERVATIONS",
    },
    {
      url: "/delete",
      label: "DELETE MODELS",
    },
  ];

  return (
    <>
      <div
        id="sidebar"
        className="hidden md:flex flex-col bg-white lg:w-[400px] border-r border-gray-400 transition ease-in delay-300"
      >
        <div className="rounded-full">
          <Link to="/">
            <img
              className="h-auto w-[200px] m-0 flex items-center justify-start"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>

        <ul className="mt-50 py-4 font-bold flex-1">
          {links.map((link) => (
            <Link to={link.url}>
              <li
                className={`p-4 ml-6 text-[20px] lg:text-[30px] rounded-md ${
                  location.pathname === link.url
                    ? "bg-[#96bf01] text-white"
                    : "hover:bg-[#96bf01] hover:text-white"
                }`}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>

        <div className="mt-6">
          <ul className="flex p-6 justify-around text-gray-500">
            <li>
              <FaFacebookF size={20} />
            </li>
            <li>
              <FaTwitter size={20} />
            </li>
            <li>
              <TiSocialGooglePlus size={20} />
            </li>
            <li>
              <FaPinterestP size={20} />
            </li>
            <li>
              <FaGithub size={20} />
            </li>
          </ul>
          <p className="flex items-center justify-center">
            @ 2023 SAT - RENTCAR
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
