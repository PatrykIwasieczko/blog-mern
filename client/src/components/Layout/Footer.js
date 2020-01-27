// React
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <section className="footer">
            <div className="contact py-2">
                <ul>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                </ul>

                <ul>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                </ul>
                <ul>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit.</li>
                </ul>
            </div>
            <div className="copyright">
                <p>
                    Site provided by <NavLink to="/">Patryk Iwasieczko</NavLink>
                </p>
            </div>
        </section>
    );
};

export default Footer;
