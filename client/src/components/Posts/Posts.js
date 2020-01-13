import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import "moment/locale/pl";
import { getPosts } from "../../redux/actions/postActions";
import { connect } from "react-redux";

// Components
import Spinner from "../UI/Spinner";
import ConfirmDeletePost from "./ConfirmDeletePost";
import Backdrop from "../Layout/Backdrop";

class Posts extends Component {
    state = {
        isOpen: false,
        deletingId: null
    };
    componentDidMount() {
        this.props.getPosts();
    }

    modalOpen = post => {
        // this.props.deletePost(postId);
        this.setState({ isOpen: true, deletingId: post._id });
    };

    hideModal = () => {
        this.setState({ isOpen: false });
    };

    render() {
        const { posts } = this.props.post;
        moment.locale("pl");
        let postSpinner = this.props.post.loading ? (
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
                            <i
                                onClick={this.modalOpen.bind(this, post)}
                                className="fas fa-times fa-2x delete-post-icon"
                            ></i>
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

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
