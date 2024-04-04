import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* <h1>Hello</h1> */}
      <nav className="navbar">
        <div className="brandName">
          <Link to="/">Company Name</Link>
        </div>
        <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
