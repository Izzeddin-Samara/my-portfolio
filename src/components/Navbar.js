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
                        <Link to="welcomebanner" smooth={true} duration={1000} offset={-100} className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} offset={-220} className="nav-link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} offset={-100} className="nav-link">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} offset={-140} className="nav-link">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} offset={90} className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;
