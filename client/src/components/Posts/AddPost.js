import React, { Component } from "react";
import { addPost } from "../../redux/actions/postActions";
import { connect } from "react-redux";

class AddPost extends Component {
    state = {
        authors: ["First author", "Second author"],
        post: {
            author: "First author",
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
        this.props.addPost(newPost, () => {
            this.setState({
                post: {
                    author: "First author",
                    body: "",
                    title: ""
                }
            });
            this.props.history.push("/");
        });
    };

    render() {
        return (
            <div className="container container-form py-2">
                <h1 className="text-center">Add a Post</h1>
                <form className="form">
                    <h2 className="py-1">Post title</h2>
                    <input
                        value={this.state.post.title}
                        onChange={this.handlePostChange}
                        type="text"
                        name="title"
                        placeholder="Enter post title"
                    />
                    <h2 className="py-1">Post content</h2>
                    <textarea
                        value={this.state.post.body}
                        onChange={this.handlePostChange}
                        name="body"
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                    <h2 className="py-1">Author</h2>
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

export default connect(null, { addPost })(AddPost);
