import React from "react";
import logo from "../logo.svg";

// function Header() {
const Header = () => {

    return (
        <div className="header">
            <img className="logo" src={logo} alt="Header Component" />
            <h3>Logo</h3>
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
};

export default Header;
