import { GET_POSTS, ADD_POST, DELETE_POST, POSTS_LOADING } from "./types";
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
        .catch(err => console.error(err));
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

export const setPostsLoading = () => {
    return {
        type: POSTS_LOADING
    };
};
