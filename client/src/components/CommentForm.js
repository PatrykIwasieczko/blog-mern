import React, { Component } from "react";

class CommentForm extends Component {
    render() {
        return (
            <div className="container comment-form">
                <h1>Leave a comment</h1>
                <form className="form">
                    <p>Leave a comment</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <p>Name</p>
                    <div className="comment-grid">
                        <input type="text" placeholder="Enter your name" />
                        <button className="btn">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CommentForm;
