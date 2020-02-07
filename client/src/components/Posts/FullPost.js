// React
import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import CommentForm from "./Comments/CommentForm";
import Comments from "./Comments/Comments";
import Spinner from "../UI/Spinner";
import EditPost from "./EditPost";
import Backdrop from "../Layout/Backdrop";

// Redux
import { getPost } from "../../redux/actions/postActions";
import { connect } from "react-redux";

// Other libraries
import moment from "moment";
import "moment/locale/pl";

class FullPost extends Component {
    state = {
        post: {
            imageUrl: ""
        },
        isOpen: false,
        deletingId: null
    };

    componentDidMount() {
        const postId = this.props.match.params.id;

        this.props.getPost(postId, () => {
            return this.props.post.image
                ? this.encodeImage(this.props.post.image.data.data)
                : null;
        });
    }

    modalOpen = post => {
        this.setState({ isOpen: true, deletingId: post._id });
    };

    hideModal = () => {
        this.setState({ isOpen: false });
    };

    encodeImage = img => {
        let base64String = btoa(
            new Uint8Array(img).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
            )
        );
        this.setState({
            imageUrl: "data:image/jpeg;base64, " + base64String
        });
    };

    render() {
        const { title, author, date, body, _id, comments } = this.props.post;
        moment.locale("pl");

        let fullPost = this.props.loading ? (
            <Spinner />
        ) : (
            <div className="container">
                <div className="post">
                    <div className="text">
                        <div className="headers">
                            <h1>
                                {title}{" "}
                                {this.props.isAuthenticated ? (
                                    <i
                                        onClick={this.modalOpen.bind(
                                            this,
                                            this.props.post
                                        )}
                                        className="fas fa-pen edit-post-icon"
                                    ></i>
                                ) : null}
                                {this.state.isOpen ? (
                                    <Backdrop show={this.state.isOpen} />
                                ) : null}
                                <EditPost
                                    title={title}
                                    author={author}
                                    body={body}
                                    hideModal={this.hideModal}
                                    isOpen={this.state.isOpen}
                                />
                            </h1>

                            <p className="lead">Made by: {author}</p>
                            <p>{moment(date).fromNow()}</p>
                        </div>
                        <p className="body">{body}</p>
                    </div>
                    <div className="image">
                        <img src={this.state.imageUrl} alt="" />
                    </div>
                </div>
                <div className="">
                    <CommentForm postId={_id} />
                    <Comments comments={comments} />
                </div>
            </div>
        );

        return <>{fullPost}</>;
    }
}

FullPost.propTypes = {
    post: PropTypes.object.isRequired,
    getPost: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    post: state.post.post,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getPost })(FullPost);
