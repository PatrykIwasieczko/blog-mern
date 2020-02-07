const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const formidable = require("formidable");
const fs = require("fs");

const Post = require("../../models/Post.js");
const Comment = require("../../models/Comment.js");

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        return res.json(posts);
    } catch (err) {
        return res.status(500).json({ msg: "Something went wrong" });
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
        return res.status(404).json({ msg: "Post does not exist" });
    }
});

// @route   POST api/posts
// @desc    Post the post
// @access  Protected
router.post("/", auth, async (req, res) => {
    // const { title, body, author } = req.body;
    // if (!title || !body || !author) {
    //     return res.status(400).json({ msg: "Please enter all fields" });
    // }
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }
        let post = new Post(fields);
        if (files.image) {
            post.image.data = fs.readFileSync(files.image.path);
            post.image.contentType = files.image.type;
        }
        post.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: "error"
                });
            }
            res.json(result);
        });
    });

    // try {
    //     const newPost = new Post({
    //         title: title,
    //         body: body,
    //         author: author
    //     });
    //     await newPost.save();
    //     return res.json(newPost);
    // } catch (err) {
    //     return res.status(400).json({ msg: err.message });
    // }
});

// @route   DELETE api/posts/id
// @desc    Delete a post
// @access  Protected
router.delete("/:id", auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        await post.remove();

        return res.json({ msg: "Post successfully removed" });
    } catch (err) {
        return res.status(404).json({ msg: "Post does not exist" });
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
            body: req.body.body
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
