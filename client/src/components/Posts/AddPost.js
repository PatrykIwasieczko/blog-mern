import React, { Component } from "react";

class AddPost extends Component {
    state = {
        authors: ["First author", "Second author"]
    };

    render() {
        return (
            <div className="container addpost-form">
                <h1>Add a Post</h1>
                <form className="form">
                    <p>Post title</p>
                    <input type="text" placeholder="Enter your name" />
                    <p>Post content</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <p>Author</p>
                    <div className="comment-grid">
                        <select name="authors">
                            {this.state.authors.map(author => (
                                <option value={author}>{author}</option>
                            ))}
                        </select>
                        <button className="btn">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddPost;
