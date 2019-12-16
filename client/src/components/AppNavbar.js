import React from "react";

const AppNavbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a href="#">Posts</a>
                </li>
                <li>
                    <a href="#">Posts</a>
                </li>
                <li>
                    <a href="#">Posts</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default AppNavbar;
