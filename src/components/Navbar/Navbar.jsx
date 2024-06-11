import React from 'react';
import { useNavigate } from "react-router-dom";
import './Navbar.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import Signup from '../Signup/Signup';

const Navbar = () => {


  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };
  const Signup  = () => {
    navigate("/signup");
  };
  const logo = () => {
    navigate("/");
  };

  return (
    <>
    <nav className="navbar">
      <div className="navbar__logo">
        <img onClick={logo} style={{ cursor:"pointer"}} className='navbar__logo__pic' src='https://www.bluefly.com/cdn/shop/files/BLUEFLY-LOGO-11-20.png?v=1613183141' alt='Bluefly logo' />
      </div>
      
        
        <button className="navbar__icon-btn">
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="navbar__icon-btn" onClick={Signup}>Sign Up</button>
        <button className="navbar__icon-btn" onClick={login}>Login</button>
        <button className="navbar__icon-btn">
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
    </nav>


        <div className='Category'>
            <p>CLOTHING</p>
            <p>SHOES</p>
            <p>HANDBAGS</p>
            <p>DESIGNERS</p>
            <p>SUNGLASSES</p>   
            <p>JEWELRY & WATCHES</p>
            <p>ACCESSORIES</p>
            <p>HOME</p>
            <p>UNDER $50</p>
            <p style={{ color:"red"}}>CLEARENCE</p>
        </div>

    </>
  );
};

export default Navbar;
