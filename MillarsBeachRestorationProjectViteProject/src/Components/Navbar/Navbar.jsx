import './Navbar.css';
import React from 'react';

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
        <li><a href="blog">Our Blog</a></li>
        <li><a href="newsletter">Newsletter</a></li>
        <li><a href="contact">Contact Us</a></li>
        <li><a href="donate" className=''>Donate</a></li>
    </ul>
</nav>

    );
};

export default Navbar;