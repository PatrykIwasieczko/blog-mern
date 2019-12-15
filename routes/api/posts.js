const express = require("express");
const router = express.Router();

const Post = require("../../models/Post.js");

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

module.exports = router;
