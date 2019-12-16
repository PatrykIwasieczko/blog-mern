import React from "react";
import "./App.scss";

// Components
import AppNavbar from "./components/AppNavbar";

function App() {
    return (
        <div>
            <AppNavbar />
            <div className="container">
                <h1 className="content">Hello world</h1>
            </div>
        </div>
    );
}

export default App;
