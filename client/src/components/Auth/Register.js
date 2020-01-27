// React
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// Redux
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
    handleRegisterChange = event => {
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
            <div className="container container-form">
                <h1 className="text-center">Register</h1>

                <form className="form">
                    <h2 className="py-1">Username</h2>
                    <input
                        name="name"
                        onChange={this.handleRegisterChange}
                        value={this.state.registerData.name}
                        type="text"
                        placeholder="Enter your username"
                    />
                    <h2 className="py-1">Email</h2>
                    <input
                        name="email"
                        onChange={this.handleRegisterChange}
                        value={this.state.registerData.email}
                        type="email"
                        placeholder="Enter your email"
                    />
                    <h2 className="py-1">Password</h2>
                    <div className="form-grid">
                        <input
                            name="password"
                            onChange={this.handleRegisterChange}
                            value={this.state.registerData.password}
                            type="password"
                            placeholder="Enter your password"
                        />
                        <button className="btn" onClick={this.handleRegister}>
                            Submit
                        </button>
                    </div>
                </form>
                <p className="lead my-2 text-center">
                    Already have an account? Login{" "}
                    <NavLink to="/login">here</NavLink>
                </p>
            </div>
        );
    }
}

Register.propTypes = {
    isAuthenticated: PropTypes.bool,
    register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
