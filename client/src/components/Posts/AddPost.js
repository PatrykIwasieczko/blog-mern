// React
import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux
import { addPost } from "../../redux/actions/postActions";
import { connect } from "react-redux";
import axios from "axios";

class AddPost extends Component {
    state = {
        // authors: "First author",
        author: "First author",
        body: "",
        title: "",
        image: ""
    };

    componentDidMount() {
        this.postData = new FormData();
    }

    // handlePostChange = event => {
    //     this.setState({
    //         post: {
    //             ...this.state.post,
    //             [event.target.name]: event.target.value
    //         }
    //     });
    // };

    handleChange = name => event => {
        const value =
            name === "image" ? event.target.files[0] : event.target.value;
        this.postData.set(name, value);
        this.postData.append("author", "First author");
        this.setState({
            [name]: value
        });
    };

    addPost = event => {
        event.preventDefault();
        // const { author, body, title } = this.state.post;
        // const newPost = {
        //     author,
        //     body,
        //     title
        // };

        this.props.addPost(this.postData, () => {
            this.setState({
                author: "First author",
                body: "",
                title: "",
                image: ""
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
                        value={this.state.title}
                        onChange={this.handleChange("title")}
                        type="text"
                        name="title"
                        placeholder="Enter post title"
                    />
                    <h2 className="py-1">Post content</h2>
                    <textarea
                        value={this.state.body}
                        onChange={this.handleChange("body")}
                        name="body"
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                    <input
                        accept="image/*"
                        onChange={this.handleChange("image")}
                        id="file"
                        type="file"
                    />
                    <h2 className="py-1">Author</h2>
                    <div className="comment-grid">
                        {/* <select
                            onChange={this.handleChange("author")}
                            name="author"
                        >
                            {this.state.authors.map((author, index) => (
                                <option key={index} value={author}>
                                    {author}
                                </option>
                            ))}
                        </select> */}
                        <button onClick={this.addPost} className="btn">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

AddPost.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(AddPost);
