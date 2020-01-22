import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { register } from "../../redux/actions/authActions";

class Register extends Component {
    state = {
        registerData: {
            name: "",
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

    handleRegister = event => {
        event.preventDefault();
        const { name, email, password } = this.state.registerData;
        const newUser = {
            name,
            email,
            password
        };
        this.props.register(newUser);
    };
    render() {
        return (
            <div className="container">
                <h1>Register</h1>

                <form className="form">
                    <p>Username</p>
                    <input
                        name="name"
                        onChange={this.handleLoginChange}
                        value={this.state.registerData.name}
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
                        <button className="btn" onClick={this.handleRegister}>
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
