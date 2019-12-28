import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import "moment/locale/pl";
import { getPosts } from "../../redux/actions/postActions";
import { connect } from "react-redux";

// Components
import Spinner from "../UI/Spinner";

class AllPosts extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

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
                        </div>
                    ))}
                </div>
                <div className="show-more-btn my-2">
                    <button onClick={this.loadPosts} className="btn">
                        Read more
                    </button>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(AllPosts);
