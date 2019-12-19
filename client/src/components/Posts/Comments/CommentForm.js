import React, { Component } from "react";
import axios from "axios";

class CommentForm extends Component {
    state = {
        comment: {
            body: "",
            user: ""
        }
    };

    handleCommentChange = event => {
        this.setState({
            comment: {
                ...this.state.comment,
                [event.target.name]: event.target.value
            }
        });
    };

    handlePostComment = event => {
        event.preventDefault();
        const { body, user } = this.state.comment;
        const newComment = {
            body,
            user
        };

        const postId = this.props.postId;

        axios
            .post(
                `http://localhost:5000/api/posts/${postId}/comment`,
                newComment
            )
            .then(() => {
                this.setState({
                    comment: {
                        user: "",
                        body: ""
                    }
                });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container comment-form">
                <h1>Leave a comment</h1>
                <form onSubmit={this.handlePostComment} className="form">
                    <p>Leave a comment</p>
                    <textarea
                        name="body"
                        onChange={this.handleCommentChange}
                        value={this.state.comment.body}
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                    <p>Name</p>
                    <div className="comment-grid">
                        <input
                            name="user"
                            onChange={this.handleCommentChange}
                            value={this.state.comment.user}
                            type="text"
                            placeholder="Enter your name"
                        />
                        <button className="btn">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CommentForm;
