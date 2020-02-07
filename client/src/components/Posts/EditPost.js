// React
import React, { Component } from "react";

class EditPost extends Component {
    state = {
        author: "First author",
        body: "",
        title: "",
        isOpen: true
    };

    handleChange = name => event => {
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    editPost = () => {
        const newBody = this.state.body ? this.state.body : this.props.body;
        const newTitle = this.state.title ? this.state.title : this.props.title;
        console.log(newTitle, newBody);
        this.props.hideModal();
    };

    render() {
        const { title, body, isOpen } = this.props;
        let modalMarkup = isOpen ? (
            <div className="confirm-delete-modal">
                <h1>Edit your post data</h1>
                <input
                    defaultValue={title}
                    onChange={this.handleChange("title")}
                    type="text"
                    name="title"
                    placeholder="Enter post title"
                />
                <h2 className="py-1">Post content</h2>
                <textarea
                    defaultValue={body}
                    onChange={this.handleChange("body")}
                    name="body"
                    id=""
                    cols="30"
                    rows="10"
                ></textarea>

                <h2 className="py-1">Author</h2>
                <div>
                    <select
                        onChange={this.handleChange("author")}
                        name="author"
                    >
                        <option value="First author">First author</option>
                        <option value="Second author">Second author</option>
                        ))}
                    </select>
                    <button onClick={this.editPost} className="btn">
                        Submit
                    </button>
                </div>
            </div>
        ) : null;

        return <> {modalMarkup}</>;
    }
}

export default EditPost;
