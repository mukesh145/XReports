import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* <h1>Hello</h1> */}
      <nav className="navbar">
        <div className="brandName">
          <p>Company Name</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
