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

class AllPosts extends Component {
    state = {
        searchText: ""
    };
    componentDidMount() {
        this.props.getPosts();
    }

    searchPost = event => {
        this.setState({
            searchText: event.target.value
        });
    };

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
                <h1 className="text-center">All posts list</h1>
                <div className="container search-bar">
                    <input type="text" onChange={this.searchPost} />
                    <i className="fas fa-search fa-2x delete-post-icon"></i>
                </div>
                <div className="posts container">
                    {postSpinner}
                    {posts
                        .filter(filteredPost => {
                            return (
                                filteredPost.body
                                    .toLowerCase()
                                    .includes(
                                        this.state.searchText.toLowerCase()
                                    ) ||
                                filteredPost.title
                                    .toLowerCase()
                                    .includes(
                                        this.state.searchText.toLowerCase()
                                    )
                            );
                        })
                        .map(post => (
                            <div
                                key={post._id}
                                className="post"
                                postid={post._id}
                            >
                                <img src="/images/food4.jpg" alt="" />
                                <h2>{post.title}</h2>
                                <p>{moment(post.date).fromNow()}</p>
                                <p className="my-1">
                                    {post.body.substring(0, 120) + "..."}
                                </p>
                                <NavLink to={`/${post._id}`}>
                                    <button className="btn">Read more</button>
                                </NavLink>
                            </div>
                        ))}
                </div>
                <div className="show-more-btn my-2">
                    <button className="btn">Read more</button>
                </div>
            </>
        );
    }
}

AllPosts.propTypes = {
    posts: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    posts: state.post.posts,
    loading: state.post.isLoading
});

export default connect(mapStateToProps, { getPosts })(AllPosts);
