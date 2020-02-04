import {
    GET_POSTS,
    GET_POST,
    ADD_POST,
    DELETE_POST,
    POSTS_LOADING,
    STOP_POSTS_LOADING
} from "./types";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

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
        .catch(error =>
            dispatch(returnErrors(error.response.data, error.response.status))
        );
};

export const getPost = (postId, callback) => dispatch => {
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
        .then(() => {
            callback();
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status));
            dispatch(stopPostsLoading());
        });
};

export const addPost = (post, callback) => (dispatch, getState) => {
    axios
        .post("/api/posts", post, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_POST,
                payload: res.data
            });
        })
        .then(() => {
            callback();
        })

        .catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status));
        });
};

export const deletePost = postId => (dispatch, getState) => {
    axios
        .delete(`/api/posts/${postId}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_POST,
                payload: postId
            });
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status));
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
