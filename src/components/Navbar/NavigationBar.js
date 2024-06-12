import React from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import "./navigationbar.css";

const NavigationBar = () => {
    const styleLink = ({ isActive }) => ({
        color: isActive ? 'green' : 'inherit',
        textDecoration: isActive ? 'underline' : 'none',
    });

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <nav className="navigation-bar">
                <Link to="/" className="logo">
                    <FontAwesomeIcon icon={faBookOpenReader} size="2x" />
                </Link>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" style={styleLink}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts" style={styleLink}>Posts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" style={styleLink}>Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" style={styleLink}>About</NavLink>
                    </li>
                </ul>
            </nav>
        </Router>
    );
};

export default NavigationBar;
