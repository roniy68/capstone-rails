import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../assets/stylesheets/navigationStyle/init.css';

const Body = () => (
  <header className="header">
    <div className="header-title">Book or Rent Out Your Favourite Car</div>
    <div className="header-book-btn-space">
      <div className="header-book-btn-login">
        <Link to="/login" className="link-login">
            <button>Login</button>
            </Link>
      </div>
    </div>
  </header>
);

export default Body;