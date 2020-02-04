// React
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// Components
import ConfirmDeletePost from "./ConfirmDeletePost";
import Backdrop from "../Layout/Backdrop";
import Spinner from "../UI/Spinner";

// Redux
import { connect } from "react-redux";

// Other librarier
import moment from "moment";

class SinglePost extends Component {
    state = {
        imageUrl: null,
        isOpen: false,
        deletingId: null
    };

    componentDidMount() {
        return this.props.post.image.data.data
            ? this.encodeImage(this.props.post.image.data.data)
            : null;
    }

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

    modalOpen = post => {
        this.setState({ isOpen: true, deletingId: post._id });
    };

    hideModal = () => {
        this.setState({ isOpen: false });
    };
    render() {
        const { _id, title, body, date } = this.props.post;
        let content = this.props.loading ? (
            <Spinner />
        ) : (
            <div className="post" postid={_id}>
                <img
                    src={
                        this.state.imageUrl
                            ? this.state.imageUrl
                            : "/images/food4.jpg"
                    }
                    alt=""
                />
                <h2 onClick={() => console.log(this.props)}>{title}</h2>
                <p>{moment(date).fromNow()}</p>
                <p className="my-1">{body.substring(0, 120) + "..."}</p>
                <NavLink to={`/${_id}`}>
                    <button className="btn">Read more</button>
                </NavLink>
                {this.props.isAuthenticated ? (
                    <i
                        onClick={this.modalOpen.bind(this, this.props.post)}
                        className="fas fa-times fa-2x delete-post-icon"
                    ></i>
                ) : null}
                {this.state.isOpen ? (
                    <Backdrop show={this.state.isOpen} />
                ) : null}
                <ConfirmDeletePost
                    postId={this.state.deletingId}
                    hideModal={this.hideModal}
                    isOpen={this.state.isOpen}
                />
            </div>
        );
        return <>{content}</>;
    }
}

SinglePost.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(SinglePost);
