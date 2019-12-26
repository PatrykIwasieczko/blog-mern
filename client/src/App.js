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
import AllPosts from "./components/Posts/AllPosts";

function App() {
    return (
        <div>
            <AppNavbar />
            <Landing />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/addpost" component={AddPost} />
                <Route path="/allposts" component={AllPosts} />
                <Route path="/:id" component={FullPost} />
                <Redirect to="/" />
            </Switch>
            <Footer />
            <TopArrow />
        </div>
    );
}

export default App;
