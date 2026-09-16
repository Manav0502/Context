import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <svg className="logo-icon" viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;