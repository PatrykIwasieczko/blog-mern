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

export const setPostsLoading = () => {
    return {
        type: POSTS_LOADING
    };
};
