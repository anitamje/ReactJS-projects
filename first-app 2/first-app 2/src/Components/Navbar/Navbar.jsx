import React from 'react';
import logo from "../../logo.svg";
import "./navbar.scss";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt={"Logo"} />
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/gallery">Gallery</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar;
