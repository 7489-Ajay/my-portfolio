import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <span className="first-word">A</span>jay Kumar Sharma
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" className="nav-link" onClick={closeMenu}>About</Link></li>
                <li><Link to="/resume" className="nav-link" onClick={closeMenu}>Resume</Link></li>
                <li><Link to="/project" className="nav-link" onClick={closeMenu}>Project</Link></li>
                <li><Link to="/contactus" className="nav-link" onClick={closeMenu}>Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
