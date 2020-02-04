// React
import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux
import { addPost } from "../../redux/actions/postActions";
import { connect } from "react-redux";

class AddPost extends Component {
    state = {
        author: "First author",
        body: "",
        title: "",
        image: ""
    };

    componentDidMount() {
        this.postData = new FormData();
    }

    handleChange = name => event => {
        const value =
            name === "image" ? event.target.files[0] : event.target.value;
        this.postData.set(name, value);
        this.setState({
            [name]: value
        });
    };

    addPost = event => {
        event.preventDefault();
        this.postData.append("author", this.state.author);
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
                        <select
                            onChange={this.handleChange("author")}
                            name="author"
                        >
                            <option value="First author">First author</option>
                            <option value="Second author">Second author</option>
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

AddPost.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(AddPost);
