import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Register extends Component {
    state = {
        registerData: {
            username: "",
            email: "",
            password: ""
        }
    };
    handleLoginChange = event => {
        this.setState({
            registerData: {
                ...this.state.registerData,
                [event.target.name]: event.target.value
            }
        });
    };

    handleLogin = event => {
        event.preventDefault();
        console.log(this.state.registerData);
    };
    render() {
        return (
            <div className="container">
                <h1>Register</h1>

                <form className="form">
                    <p>Username</p>
                    <input
                        name="username"
                        onChange={this.handleLoginChange}
                        value={this.state.registerData.username}
                        type="text"
                        placeholder="Enter your username"
                    />
                    <p>Email</p>
                    <input
                        name="email"
                        onChange={this.handleLoginChange}
                        value={this.state.registerData.email}
                        type="email"
                        placeholder="Enter your email"
                    />
                    <p>Password</p>
                    <div className="comment-grid">
                        <input
                            name="password"
                            onChange={this.handleLoginChange}
                            value={this.state.registerData.password}
                            type="password"
                            placeholder="Enter your password"
                        />
                        <button className="btn" onClick={this.handleLogin}>
                            Submit
                        </button>
                    </div>
                </form>
                <p className="lead">
                    Already have an account? Login{" "}
                    <NavLink to="/login">here</NavLink>
                </p>
            </div>
        );
    }
}

export default Register;
