import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class Posts extends Component {
    state = {
        posts: [
            // {
            //     title: "first",
            //     body:
            //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fugiat.",
            //     author: "Patryk",
            //     img: "/images/food1.jpg"
            // },
            // {
            //     title: "second",
            //     body:
            //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fugiat.",
            //     author: "Patryk",
            //     img: "/images/food2.jpg"
            // },
            // {
            //     title: "third",
            //     body:
            //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fugiat.",
            //     author: "Patryk",
            //     img: "/images/food3.jpg"
            // },
            // {
            //     title: "fourth",
            //     body:
            //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, fugiat.",
            //     author: "Patryk",
            //     img: "/images/food4.jpg"
            // }
        ]
    };

    componentDidMount() {
        axios
            .get("http://localhost:5000/api/posts")
            .then(res => {
                this.setState({ posts: res.data });
            })
            .catch(err => console.error(err));
    }
    render() {
        return (
            <div className="posts container">
                {this.state.posts.map(post => (
                    <div key={post._id} className="post" postid={post._id}>
                        <img src="/images/food4.jpg" alt="" />
                        <h2>{post.title}</h2>
                        <p className="my-1">{post.body}</p>
                        <NavLink to={`/${post._id}`}>
                            <button className="btn">Read more</button>
                        </NavLink>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
