// React
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Styles
import "./App.scss";

// Components
import AppNavbar from "./components/Layout/AppNavbar";
import Landing from "./components/Layout/Landing";
import FullPost from "./components/Posts/FullPost";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Layout/Footer";
import TopArrow from "./components/Layout/TopArrow";
import AddPost from "./components/Posts/AddPost";
import AllPosts from "./components/Posts/AllPosts";
import MobileNavbar from "./components/Layout/MobileNavbar";
import About from "./components/Layout/About";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

// Redux
import store from "./store";
import { Provider } from "react-redux";
import { loadUser } from "./redux/actions/authActions";

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }
    render() {
        return (
            <Provider store={store}>
                <div>
                    <AppNavbar />
                    <MobileNavbar />
                    <Landing />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/addpost" component={AddPost} />
                        <Route path="/allposts" component={AllPosts} />
                        <Route path="/about" component={About} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/:id" component={FullPost} />
                        <Redirect to="/" />
                    </Switch>
                    <Footer />
                    <TopArrow />
                </div>
            </Provider>
        );
    }
}

export default App;
