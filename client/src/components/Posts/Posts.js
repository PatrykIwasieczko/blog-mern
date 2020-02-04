// React
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// Components
import Spinner from "../UI/Spinner";

// Redux
import { getPosts } from "../../redux/actions/postActions";
import { connect } from "react-redux";

// Other libraries
import moment from "moment";
import "moment/locale/pl";
import SinglePost from "./SinglePost";

class Posts extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts, loading } = this.props;
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
                        <SinglePost key={post._id} post={post} />
                    ))}
                </div>
                <div className="show-more-btn my-2">
                    <NavLink to="/allposts">
                        <button className="btn">Show more posts</button>
                    </NavLink>
                </div>
            </>
        );
    }
}

Posts.propTypes = {
    loading: PropTypes.bool,
    posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    posts: state.post.posts,
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.post.loading
});

export default connect(mapStateToProps, { getPosts })(Posts);
