import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/pl";

// Components
import CommentForm from "./Comments/CommentForm";
import Comments from "./Comments/Comments";
import Spinner from "../UI/Spinner";

class FullPost extends Component {
    state = {
        post: {
            author: "",
            title: "",
            body: ""
        },
        loading: false
    };

    componentDidMount() {
        this.setState({ loading: true });
        const postId = this.props.match.params.id;
        axios
            .get(`http://localhost:5000/api/posts/${postId}`)
            .then(post => {
                this.setState({ post: post.data });
            })
            .then(() => {
                this.setState({ loading: false });
            })
            .catch(err => {
                console.log(err);
                this.setState({ loading: false });
            });
    }

    render() {
        moment.locale("pl");
        const { title, author, body, date, comments } = this.state.post;

        let fullPost = this.state.loading ? (
            <Spinner />
        ) : (
            <div className="container">
                <div className="post">
                    <div className="text">
                        <h1>{title}</h1>
                        <p className="lead">Made by: {author}</p>
                        <p>{moment(date).fromNow()}</p>
                        <p>{body}</p>
                    </div>
                    <div className="image">
                        <img src="/images/food6.jpg" alt="" />
                    </div>
                </div>
                <div className="">
                    <CommentForm />
                    <Comments comments={comments} />
                </div>
            </div>
        );

        return <>{fullPost}</>;
    }
}

export default FullPost;
