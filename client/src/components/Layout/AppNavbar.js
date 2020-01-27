// React
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// Redux
import { logout } from "../../redux/actions/authActions";
import { connect } from "react-redux";

class AppNavbar extends Component {
    render() {
        const { isAuthenticated } = this.props;
        const userLinks = (
            <>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/addpost">Add Post</NavLink>
                </li>
                <li>
                    <NavLink to="/allposts">All Posts</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/" onClick={this.props.logout}>
                        Logout
                    </NavLink>
                </li>
            </>
        );

        const guestLinks = (
            <>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/allposts">All Posts</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </>
        );

        return (
            <nav className="navbar">
                <ul>{isAuthenticated ? userLinks : guestLinks}</ul>
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
    }
}

AppNavbar.propTypes = {
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(AppNavbar);
