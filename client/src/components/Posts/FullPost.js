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
        return (
            <div className="container">
                <div className="post">
                    <div className="text">
                        <h1>{this.state.post.title}</h1>
                        <p className="lead">
                            Made by: {this.state.post.author}
                        </p>
                        <p>{this.state.post.body}</p>
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
