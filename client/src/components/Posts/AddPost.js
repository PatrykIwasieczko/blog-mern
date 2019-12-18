import React, { Component } from "react";
import axios from "axios";

class AddPost extends Component {
    state = {
        authors: ["First author", "Second author"],
        post: {
            author: "",
            body: "",
            title: ""
        }
    };

    handlePostChange = event => {
        this.setState({
            post: {
                ...this.state.post,
                [event.target.name]: event.target.value
            }
        });
    };

    addPost = event => {
        event.preventDefault();
        const { author, body, title } = this.state.post;
        const newPost = {
            author,
            body,
            title
        };
        axios
            .post("http://localhost:5000/api/posts", newPost)
            .then(() => {
                this.setState({
                    post: {
                        author: "",
                        body: "",
                        title: ""
                    }
                });
            })
            .then(() => {
                this.props.history.push("/");
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className="container addpost-form">
                <h1>Add a Post</h1>
                <form className="form">
                    <p>Post title</p>
                    <input
                        value={this.state.post.title}
                        onChange={this.handlePostChange}
                        type="text"
                        name="title"
                        placeholder="Enter post title"
                    />
                    <p>Post content</p>
                    <textarea
                        value={this.state.post.body}
                        onChange={this.handlePostChange}
                        name="body"
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                    <p>Author</p>
                    <div className="comment-grid">
                        <select onChange={this.handlePostChange} name="author">
                            {this.state.authors.map((author, index) => (
                                <option key={index} value={author}>
                                    {author}
                                </option>
                            ))}
                        </select>
                        <button onClick={this.addPost} className="btn">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddPost;
