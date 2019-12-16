import React from "react";

// Components
import Welcome from "./Welcome";
import Posts from "./Posts";

const MainPage = () => {
    return (
        <>
            <Posts />
            <Welcome />
        </>
    );
};

export default MainPage;
