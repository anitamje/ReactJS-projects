import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <div className="nav">
        <img src={logo} alt='' />
        <div>
            <Link to="/">Home</Link>
            <Link to="/sneakers">Sneakers</Link>
        </div>
    </div>
  )
}

export default Navbar;
