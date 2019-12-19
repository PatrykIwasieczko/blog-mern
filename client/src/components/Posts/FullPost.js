import React, { Component } from "react";
import axios from "axios";

// Components
import CommentForm from "./Comments/CommentForm";
import Comments from "./Comments/Comments";

class FullPost extends Component {
    state = {
        post: {
            author: "",
            title: "",
            body: ""
        }
    };

    componentDidMount() {
        const postId = this.props.match.params.id;
        axios.get(`http://localhost:5000/api/posts/${postId}`).then(post => {
            this.setState({ post: post.data });
        });
    }

    render() {
        const { title, author, body } = this.state.post;
        return (
            <div className="container">
                <div className="post">
                    <div className="text">
                        <h1>{title}</h1>
                        <p className="lead">Made by: {author}</p>
                        <p>{body}</p>
                    </div>
                    <div className="image">
                        <img src="/images/food6.jpg" alt="" />
                    </div>
                </div>
                <div className="">
                    <CommentForm />
                    <Comments />
                </div>
            </div>
        );
    }
}

export default FullPost;
