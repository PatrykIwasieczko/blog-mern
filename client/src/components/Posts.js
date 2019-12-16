import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Posts extends Component {
    render() {
        return (
            <div className="posts container">
                <div className="post">
                    <img src="/images/food1.jpg" alt="" />
                    <h2>Title</h2>
                    <p className="my-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate architecto deleniti nisi sed, provident
                        dolores eaque doloribus atque! Distinctio doloremque
                        eveniet culpa dignissimos necessitatibus?
                    </p>
                    <NavLink to="/post">
                        <button className="btn">Read more</button>
                    </NavLink>
                </div>
                <div className="post">
                    <img src="/images/food3.jpg" alt="" />
                    <h2>Title</h2>
                    <p className="my-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate architecto deleniti nisi sed, provident
                        dolores eaque doloribus atque! Distinctio doloremque
                        eveniet culpa dignissimos necessitatibus?
                    </p>
                    <NavLink to="/post">
                        <button className="btn">Read more</button>
                    </NavLink>
                </div>
                <div className="post">
                    <img src="/images/food4.jpg" alt="" />
                    <h2>Title</h2>
                    <p className="my-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate architecto deleniti nisi sed, provident
                        dolores eaque doloribus atque! Distinctio doloremque
                        eveniet culpa dignissimos necessitatibus?
                    </p>
                    <NavLink to="/post">
                        <button className="btn">Read more</button>
                    </NavLink>
                </div>
                <div className="post">
                    <img src="/images/food5.jpg" alt="" />
                    <h2>Title</h2>
                    <p className="my-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate architecto deleniti nisi sed, provident
                        dolores eaque doloribus atque! Distinctio doloremque
                        eveniet culpa dignissimos necessitatibus?
                    </p>
                    <NavLink to="/post">
                        <button className="btn">Read more</button>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Posts;