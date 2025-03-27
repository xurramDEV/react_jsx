import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo (3).png"; // Rasmni import qilish
import vector from "../assets/Frame 1.png"


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">
restaurant</Link>
        <Link to="/contact">Menu</Link>
        <Link to="/contact">Contact</Link>
    
      </nav>
<button className="battun"> LOGIN</button>
    </header>
  );
};

export default Header;
