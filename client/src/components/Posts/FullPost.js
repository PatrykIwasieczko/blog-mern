import React, { Component } from "react";
import moment from "moment";
import "moment/locale/pl";
import { getPost } from "../../redux/actions/postActions";
import { connect } from "react-redux";

// Components
import CommentForm from "./Comments/CommentForm";
import Comments from "./Comments/Comments";
import Spinner from "../UI/Spinner";

class FullPost extends Component {
    state = {
        post: {
            author: "",
            title: "",
            body: "",
            _id: ""
        },
        loading: false
    };

    componentDidMount() {
        // this.setState({ loading: true });
        const postId = this.props.match.params.id;
        this.props.getPost(postId);
        // axios
        //     .get(`/api/posts/${postId}`)
        //     .then(post => {
        //         this.setState({ post: post.data });
        //     })
        //     .then(() => {
        //         this.setState({ loading: false });
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         this.setState({ loading: false });
        //     });
    }

    render() {
        const {
            title,
            author,
            date,
            body,
            _id,
            comments
        } = this.props.post.post;
        moment.locale("pl");
        // const { title, author, body, date, comments } = this.state.post;

        let fullPost = this.props.loading ? (
            <Spinner />
        ) : (
            <div className="container">
                <div className="post">
                    <div className="text">
                        <div className="headers">
                            <h1>{title}</h1>
                            <p className="lead">Made by: {author}</p>
                            <p>{moment(date).fromNow()}</p>
                        </div>
                        <p className="body">{body}</p>
                    </div>
                    <div className="image">
                        <img src="/images/food6.jpg" alt="" />
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

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPost })(FullPost);
