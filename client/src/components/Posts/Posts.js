import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/pl";
import { getPosts } from "../../redux/actions/postActions";
import { connect } from "react-redux";

// Components
import Spinner from "../UI/Spinner";

class Posts extends Component {
    // state = {
    //     posts: [],
    //     loading: false
    // };

    componentDidMount() {
        this.props.getPosts();
        console.log(this.props);
        // this.setState({ loading: true });
        // axios
        //     .get("/api/posts")
        //     .then(res => {
        //         let newestPosts = res.data.slice(0, 4);
        //         this.setState({ posts: newestPosts, loading: false });
        //     })
        //     .catch(err => console.error(err));
        // this.setState({ loading: false });
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
                    <NavLink to="/allposts">
                        <button className="btn">Show more posts</button>
                    </NavLink>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
