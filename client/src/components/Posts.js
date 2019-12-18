import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Posts extends Component {
    state = {
        posts: [
            {
                title: "first",
                body:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fugiat.",
                author: "Patryk",
                img: "/images/food1.jpg"
            },
            {
                title: "second",
                body:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fugiat.",
                author: "Patryk",
                img: "/images/food2.jpg"
            },
            {
                title: "third",
                body:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fugiat.",
                author: "Patryk",
                img: "/images/food3.jpg"
            },
            {
                title: "fourth",
                body:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fugiat.",
                author: "Patryk",
                img: "/images/food4.jpg"
            }
        ]
    };
    render() {
        return (
            <div className="posts container">
                {this.state.posts.map((post, index) => (
                    <div key={index} className="post">
                        <img src={post.img} alt="" />
                        <h2>{post.title}</h2>
                        <p className="my-1">{post.body}</p>
                        <NavLink to="/post">
                            <button className="btn">Read more</button>
                        </NavLink>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
