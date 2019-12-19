import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

// Components
import Spinner from "../UI/Spinner";

class Posts extends Component {
    state = {
        posts: [],
        loading: false
    };

    componentDidMount() {
        this.setState({ loading: true });
        axios
            .get("http://localhost:5000/api/posts")
            .then(res => {
                this.setState({ posts: res.data, loading: false });
            })
            .catch(err => console.error(err));
        this.setState({ loading: false });
    }
    render() {
        let postSpinner = this.state.loading ? (
            <>
                <Spinner />
                <Spinner />
                <Spinner />
                <Spinner />
            </>
        ) : null;

        return (
            <div className="posts container">
                {postSpinner}
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
