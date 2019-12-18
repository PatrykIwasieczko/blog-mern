const express = require("express");
const router = express.Router();

const Post = require("../../models/Post.js");
const Comment = require("../../models/Comment.js");

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        return res.json(posts);
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
});

// @route   GET api/posts/id
// @desc    Get single post
// @access  Public
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        return res.json(post);
    } catch (err) {
        return res.status(404).json({ msg: err.message });
    }
});

// @route   POST api/posts
// @desc    Post the post
// @access  Public
router.post("/", async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            body: req.body.body,
            author: req.body.author
        });
        await newPost.save();
        return res.json(newPost);
    } catch (err) {
        return res.status(400).json({ msg: err.message });
    }
});

// @route   DELETE api/posts/id
// @desc    Delete a post
// @access  Public
router.delete("/:id", async (req, res) => {
    // Finish refactoring
    try {
        const post = await Post.findById(req.params.id);
        await post.remove();

        return res.json({ msg: "Post successfully removed" });
    } catch (err) {
        return res.status(404).json({ msg: err.message });
    }
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
        return res.status(500).json({ msg: err.message });
    }
});

module.exports = router;
