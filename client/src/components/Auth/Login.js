import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
        console.log(this.state.loginData);
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

export default Login;
