import React from "react";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/addpost">Add Post</NavLink>
                </li>
                <li>
                    <NavLink to="/allposts">All Posts</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
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
