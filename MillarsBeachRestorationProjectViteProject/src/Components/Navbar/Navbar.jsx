import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
<nav className="navbar">
    <div className="navbar-top">
        <h1 className="navbar-logo"><a href="/">Millars Beach Restoration Project</a></h1>
        <div className="navbar-menu-icon" onClick={toggleMenu}>☰</div>
    </div>
    <ul className={`navbar-links ${isOpen ? "navbar-links-open" : ""}`}>
        <li><a href="#ecological-report">Ecological Report</a></li>
        <li><a href="#donate">Donate</a></li>
        <li><a href="#our-updates">Our Updates</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
        <li><a href="signin">Sign In</a></li>
    </ul>
</nav>

    );
};

export default Navbar;