// React
import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthenticatedRoute = ({ component: Component }) => (
    <Route
        render={props =>
            localStorage.getItem("token") ? (
                <Component {...props} />
            ) : (
                <Redirect to="/" />
            )
        }
    />
);

export default AuthenticatedRoute;
