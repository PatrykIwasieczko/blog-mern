// React
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

// Components
import SinglePost from "./SinglePost";

// Redux
import { getPosts } from "../../redux/actions/postActions";
import { connect } from "react-redux";

// Other libraries
import moment from "moment";
import "moment/locale/pl";

class Posts extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts, loading } = this.props;
        moment.locale("pl");

        return (
            <>
                <div className="posts container">
                    {posts.map(post => (
                        <SinglePost
                            loading={loading}
                            key={post._id}
                            post={post}
                        />
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
    loading: state.post.loading
});

export default connect(mapStateToProps, { getPosts })(Posts);
