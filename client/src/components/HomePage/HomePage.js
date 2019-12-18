import React from "react";

// Components
import Welcome from "./Welcome";
import Posts from "../Posts/Posts";

const HomePage = () => {
    return (
        <>
            <Posts />
            <Welcome />
        </>
    );
};

export default HomePage;
