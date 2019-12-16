import React from "react";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/">
                        <a>Posts</a>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <a>Posts</a>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <a>Posts</a>
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/">
                        <i className="fab fa-facebook fa-2x"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <i className="fab fa-instagram fa-2x"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default AppNavbar;
