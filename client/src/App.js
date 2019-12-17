import React from "react";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";

// Components
import AppNavbar from "./components/AppNavbar";
import Landing from "./components/Landing";
import Post from "./components/Post";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import TopArrow from "./components/TopArrow";

function App() {
    return (
        <div>
            <AppNavbar />
            <Landing />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/post" component={Post} />
                <Redirect to="/" />
            </Switch>
            <Footer />
            <TopArrow />
        </div>
    );
}

export default App;
