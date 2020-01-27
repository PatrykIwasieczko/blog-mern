// React
import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux
import { deletePost } from "../../redux/actions/postActions";
import { connect } from "react-redux";

class ConfirmDeletePost extends Component {
    confirmDeletePost = () => {
        this.props.deletePost(this.props.postId);
        this.props.hideModal();
    };

    render() {
        let modalMarkup = this.props.isOpen ? (
            <div className="confirm-delete-modal">
                <h3>Are you sure you want to delete post?</h3>
                <button
                    className="btn btn-confirm"
                    onClick={this.confirmDeletePost}
                >
                    Yes
                </button>
                <button
                    className="btn btn-close"
                    onClick={this.props.hideModal}
                >
                    No
                </button>
            </div>
        ) : null;

        return <> {modalMarkup}</>;
    }
}

ConfirmDeletePost.propTypes = {
    deletePost: PropTypes.func.isRequired
};

export default connect(null, { deletePost })(ConfirmDeletePost);
