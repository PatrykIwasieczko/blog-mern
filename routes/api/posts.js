const express = require("express");
const router = express.Router();

const Post = require("../../models/Post.js");
const Comment = require("../../models/Comment.js");

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get("/", (req, res) => {
    Post.find().then(posts => res.json(posts));
});

// @route   POST api/posts
// @desc    Post the post
// @access  Public
router.post("/", (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author
    });

    newPost.save().then(item => res.json(item));
});

// @route   DELETE api/posts/id
// @desc    Delete a post
// @access  Public
router.post("/:id", (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            post.remove().then(() =>
                res.json({ msg: "Post successfully removed" })
            );
        })
        .catch(err => res.status(404).json({ msg: "Post doesn't exist" }));
});

// @route   POST api/post/:id/comment
// @desc    Post a comment
// @access  Public
router.post("/:id/comment", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const comment = new Comment({
            user: req.body.user,
            body: req.body.body,
            date: new Date().toISOString()
        });

        await comment.save();

        post.comments.push(comment);
        await post.save();
        return res.json(comment);
    } catch (err) {
        return res.status(500).json({ msg: "Something went wrong" });
    }
});

module.exports = router;
