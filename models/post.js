const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    category: { type:String, required:true },
    tags:String,
    city: { type:String, required:true },
    title: { type:String, required:true },
    message: { type:String, required:true },
    date: { type: Date, default:Date.now },
    comments: [{ body: String, date: Date }],
});


const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
