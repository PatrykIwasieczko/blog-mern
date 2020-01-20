import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
    return (
        <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
                <div></div>
            </div>
            <div className="menu">
                <div>
                    <div>
                        <ul>
                            <li>
                                <NavLink to="/addpost">Add Post</NavLink>
                            </li>
                            <li>
                                <NavLink to="/allposts">All Posts</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Posts</NavLink>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
