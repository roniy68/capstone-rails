import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
        <li>
          <Link to="/reserve">Reserve Car</Link>
        </li>
        <li>
          <Link to="/myreservations">My Reservations</Link>
        </li>
        <li>
          <Link to="/addcar">Add Car</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
