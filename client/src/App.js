import React from "react";
import "./App.scss";

// Components
import AppNavbar from "./components/AppNavbar";
import Landing from "./components/Landing";
import Posts from "./components/Posts";

function App() {
    return (
        <div>
            <AppNavbar />
            <Landing />
            <Posts />
        </div>
    );
}

export default App;
