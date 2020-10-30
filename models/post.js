const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    type: String,
    city: String,
    title: String,
    description: String,
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
