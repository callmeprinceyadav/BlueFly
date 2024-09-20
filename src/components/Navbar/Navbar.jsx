import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle for hamburger menu
  const navigate = useNavigate();

  // Handle Profile Button Click
  const handleProfileClick = () => {
    const isLoggedIn = sessionStorage.getItem('firstName'); // Check if user is logged in

    if (isLoggedIn) {
      navigate('/profile'); // Redirect to profile page if logged in
    } else {
      alert('Please log in first.'); // Show alert if not logged in
      navigate('/login'); // Redirect to login page
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img 
            onClick={handleLogoClick} 
            style={{ cursor: "pointer" }} 
            className='navbar__logo__pic' 
            src='https://www.bluefly.com/cdn/shop/files/BLUEFLY-LOGO-11-20.png?v=1613183141' 
            alt='Bluefly logo' 
          />
        </div>

        {/* Hamburger icon for mobile screens */}
        <button className="navbar__icon-btn hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Full menu for large screens */}
        <div className="navbar__actions">
          <button className="navbar__icon-btn" onClick={handleProfileClick}>
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button className="navbar__icon-btn" onClick={handleSignup}>Sign Up</button>
          <button className="navbar__icon-btn" onClick={handleLogin}>Login</button>
          <button className="navbar__icon-btn">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </nav>

      {/* Hamburger menu for small screens */}
      <div className={`navbar__menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="navbar__icon-btn" onClick={handleProfileClick}>
          <FontAwesomeIcon icon={faUser} /> Profile
        </button>
        <button className="navbar__icon-btn" onClick={handleSignup}>Sign Up</button>
        <button className="navbar__icon-btn" onClick={handleLogin}>Login</button>
        <button className="navbar__icon-btn">
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </button>

        {/* Category section for small screens */}
        <div className="Category">
          <p>CLOTHING</p>
          <p>SHOES</p>
          <p>HANDBAGS</p>
          <p>DESIGNERS</p>
          <p>SUNGLASSES</p>
          <p>JEWELRY & WATCHES</p>
          <p>ACCESSORIES</p>
          <p>HOME</p>
          <p>UNDER $50</p>
          <p style={{ color: "red" }}>CLEARANCE</p>
        </div>
      </div>

      {/* Category section for large screens */}
      <div className="Category large-screen">
        <p>CLOTHING</p>
        <p>SHOES</p>
        <p>HANDBAGS</p>
        <p>DESIGNERS</p>
        <p>SUNGLASSES</p>
        <p>JEWELRY & WATCHES</p>
        <p>ACCESSORIES</p>
        <p>HOME</p>
        <p>UNDER $50</p>
        <p style={{ color: "red" }}>CLEARANCE</p>
      </div>
    </>
  );
};

export default Navbar;
