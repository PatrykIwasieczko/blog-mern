import React from "react";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";

// Components
import AppNavbar from "./components/Layout/AppNavbar";
import Landing from "./components/Layout/Landing";
import FullPost from "./components/Posts/FullPost";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Layout/Footer";
import TopArrow from "./components/Layout/TopArrow";
import AddPost from "./components/Posts/AddPost";

function App() {
    return (
        <div>
            <AppNavbar />
            <Landing />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/post" component={FullPost} />
                <Route path="/addpost" component={AddPost} />
                <Redirect to="/" />
            </Switch>
            <Footer />
            <TopArrow />
        </div>
    );
}

export default App;
