// React
import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { editPost } from "../../redux/actions/postActions";

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

    handlePostEdit = () => {
        const postId = this.props.postId;
        const body = this.state.body ? this.state.body : this.props.body;
        const title = this.state.title ? this.state.title : this.props.title;
        const author = this.state.author;
        const post = { body, title, author };
        this.props.editPost(post, postId);
        this.props.hideModal();
    };

    render() {
        const { title, body, isOpen } = this.props;
        let modalMarkup = isOpen ? (
            <div className="edit-modal">
                <h2>Edit your post data</h2>
                <h4 className="py-1">Post title</h4>
                <input
                    defaultValue={title}
                    onChange={this.handleChange("title")}
                    type="text"
                    name="title"
                />
                <h4 className="py-1">Post content</h4>
                <textarea
                    defaultValue={body}
                    onChange={this.handleChange("body")}
                    name="body"
                    id=""
                    cols="30"
                    rows="10"
                ></textarea>

                <h4 className="py-1">Author</h4>
                <div>
                    <button
                        onClick={() => this.props.hideModal()}
                        className="btn"
                    >
                        Back
                    </button>
                    <select
                        onChange={this.handleChange("author")}
                        name="author"
                    >
                        <option value="First author">First author</option>
                        <option value="Second author">Second author</option>
                        ))}
                    </select>
                    <button onClick={this.handlePostEdit} className="btn">
                        Submit
                    </button>
                </div>
            </div>
        ) : null;

        return <> {modalMarkup}</>;
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { editPost })(EditPost);
