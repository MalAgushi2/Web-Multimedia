import React from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom"; // Ensure BrowserRouter is aliased as Router
import "./navigationbar.css";

const NavigationBar = () => {
    const styleLink = ({ isActive }) => {
        return {
            color: isActive ? 'green' : "",
            textDecoration: isActive ? "underline" : "",
        };
    };

    return (
        <Router basename={process.env.PUBLIC_URL}> {/* Set basename */}
            <nav className="navigation-bar">
                <Link to="/">
                    <h1>logo</h1>
                </Link>
                <ul>
                    <li>
                        <NavLink to="/" activeStyle={styleLink}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts" activeStyle={styleLink}>Posts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" activeStyle={styleLink}>Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeStyle={styleLink}>About</NavLink>
                    </li>
                </ul>
            </nav>
        </Router>
    );
};

export default NavigationBar;
