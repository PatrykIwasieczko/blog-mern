// React
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// Components
import Spinner from "../UI/Spinner";
import ConfirmDeletePost from "./ConfirmDeletePost";
import Backdrop from "../Layout/Backdrop";

// Redux
import { getPosts } from "../../redux/actions/postActions";
import { connect } from "react-redux";

// Other libraries
import moment from "moment";
import "moment/locale/pl";

class Posts extends Component {
    state = {
        isOpen: false,
        deletingId: null
    };
    componentDidMount() {
        this.props.getPosts();
    }

    modalOpen = post => {
        this.setState({ isOpen: true, deletingId: post._id });
    };

    hideModal = () => {
        this.setState({ isOpen: false });
    };

    render() {
        const { isAuthenticated, posts, loading } = this.props;
        moment.locale("pl");
        let postSpinner = loading ? (
            <>
                <Spinner />
                <Spinner />
                <Spinner />
                <Spinner />
            </>
        ) : null;

        return (
            <>
                <div className="posts container">
                    {postSpinner}
                    {posts.map(post => (
                        <div key={post._id} className="post" postid={post._id}>
                            <img src="/images/food4.jpg" alt="" />
                            <h2>{post.title}</h2>
                            <p>{moment(post.date).fromNow()}</p>
                            <p className="my-1">
                                {post.body.substring(0, 120) + "..."}
                            </p>
                            <NavLink to={`/${post._id}`}>
                                <button className="btn">Read more</button>
                            </NavLink>
                            {isAuthenticated ? (
                                <i
                                    onClick={this.modalOpen.bind(this, post)}
                                    className="fas fa-times fa-2x delete-post-icon"
                                ></i>
                            ) : null}
                        </div>
                    ))}
                </div>
                <div className="show-more-btn my-2">
                    <NavLink to="/allposts">
                        <button className="btn">Show more posts</button>
                    </NavLink>
                </div>
                {this.state.isOpen ? (
                    <Backdrop show={this.state.isOpen} />
                ) : null}
                <ConfirmDeletePost
                    postId={this.state.deletingId}
                    hideModal={this.hideModal}
                    isOpen={this.state.isOpen}
                />
            </>
        );
    }
}

Posts.propTypes = {
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.bool,
    posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    posts: state.post.posts,
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.post.loading
});

export default connect(mapStateToProps, { getPosts })(Posts);
