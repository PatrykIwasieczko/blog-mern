const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommentSchema = require("./Comment.js").schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    comments: [CommentSchema]
});

module.exports = Post = mongoose.model("post", PostSchema);
