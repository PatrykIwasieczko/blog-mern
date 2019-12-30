import {
    GET_POSTS,
    GET_POST,
    ADD_POST,
    DELETE_POST,
    POSTS_LOADING,
    STOP_POSTS_LOADING
} from "./types";
import axios from "axios";

export const getPosts = () => dispatch => {
    dispatch(setPostsLoading());
    axios
        .get("/api/posts")
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res.data
            });
        })
        .then(() => {
            dispatch(stopPostsLoading());
        })
        .catch(err => console.error(err));
};

export const getPost = postId => dispatch => {
    dispatch(setPostsLoading());
    axios
        .get(`/api/posts/${postId}`)
        .then(res => {
            dispatch({
                type: GET_POST,
                payload: res.data
            });
        })
        .then(() => {
            dispatch(stopPostsLoading());
        })
        .catch(err => {
            console.log(err);
            dispatch(stopPostsLoading());
        });
};

export const addPost = (post, callback) => dispatch => {
    axios
        .post("/api/posts", post)
        .then(res => {
            dispatch({
                type: ADD_POST,
                payload: res.data
            });
        })
        .then(() => {
            callback();
        })

        .catch(err => {
            console.log(err);
        });
};

export const deletePost = postId => dispatch => {
    axios
        .delete(`/api/posts/${postId}`)
        .then(res => {
            dispatch({
                type: DELETE_POST,
                payload: postId
            });
        })
        .catch(err => {
            console.log(err);
        });
};

export const setPostsLoading = () => {
    return {
        type: POSTS_LOADING
    };
};
export const stopPostsLoading = () => {
    return {
        type: STOP_POSTS_LOADING
    };
};
