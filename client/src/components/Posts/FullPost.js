// React
import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import CommentForm from "./Comments/CommentForm";
import Comments from "./Comments/Comments";
import Spinner from "../UI/Spinner";

// Redux
import { getPost } from "../../redux/actions/postActions";
import { connect } from "react-redux";

// Other libraries
import moment from "moment";
import "moment/locale/pl";

class FullPost extends Component {
    state = {
        post: {
            author: "",
            title: "",
            body: "",
            _id: ""
        }
    };

    componentDidMount() {
        const postId = this.props.match.params.id;
        this.props.getPost(postId);
    }

    render() {
        const {
            title,
            author,
            date,
            body,
            _id,

            comments
        } = this.props.post;
        moment.locale("pl");

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
                        <img src="/images/food4.jpg" alt="" />
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

FullPost.propTypes = {
    post: PropTypes.object.isRequired,
    getPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    post: state.post.post
});

export default connect(mapStateToProps, { getPost })(FullPost);
