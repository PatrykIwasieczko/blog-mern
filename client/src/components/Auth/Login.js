import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { login } from "../../redux/actions/authActions";

class Login extends Component {
    state = {
        loginData: {
            email: "",
            password: ""
        }
    };
    handleLoginChange = event => {
        this.setState({
            loginData: {
                ...this.state.loginData,
                [event.target.name]: event.target.value
            }
        });
    };

    handleLogin = event => {
        event.preventDefault();
        const { email, password } = this.state.loginData;
        const user = { email, password };
        this.props.login(user);
    };
    render() {
        return (
            <div className="container">
                <h1>Login</h1>

                <form className="form">
                    <p>Email</p>
                    <input
                        name="email"
                        onChange={this.handleLoginChange}
                        value={this.state.loginData.email}
                        type="email"
                        placeholder="Enter your email"
                    />
                    <p>Password</p>
                    <div className="comment-grid">
                        <input
                            name="password"
                            onChange={this.handleLoginChange}
                            value={this.state.loginData.password}
                            type="password"
                            placeholder="Enter your password"
                        />
                        <button className="btn" onClick={this.handleLogin}>
                            Submit
                        </button>
                    </div>
                </form>
                <p className="lead">
                    Don't have an account yet? Create it{" "}
                    <NavLink to="/register">here</NavLink>
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
