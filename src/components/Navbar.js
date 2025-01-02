import React, { useState } from "react";
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div>
            <nav>
                <h1>Izzeddin Samara</h1>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li>
                        <Link to="welcomebanner" smooth={true} duration={1000} offset={-100}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={1000} offset={-100}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={1000} offset={-100}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={1000} offset={-100}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={1000} offset={-100}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;
