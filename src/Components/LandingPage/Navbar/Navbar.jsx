import React, { useState } from 'react';
import './Navbar.css';



import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

   const navigate = useNavigate();
    
      const handlesignup = () => {
        // Add authentication logic here if needed
        navigate("/signup"); // Navigate to Dashboard or any route
      };
      const handlelogin = () => {
        // Add authentication logic here if needed
        navigate("/login"); // Navigate to Dashboard or any route
      };


  return (
    <div>
      {/* main navbardiv */}
      <div className="navbarparentdiv">
        <div>
          <h2>URL Shortnening</h2>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul className='uflex'>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Features</a></li>
          </ul>
        </div>

        <div className={`nav-buttons ${isOpen ? 'open' : ''}`}>
          <button onClick={handlelogin}>Login</button>
          <button onClick={handlesignup}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
