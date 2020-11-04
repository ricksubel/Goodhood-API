const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: { type: mongoose.Schema.ObjectId, ref: 'User'},
    category: { type:String, required:true },
    tags:{ type:String },
    city: { type:String, required:true },
    title: { type:String, required:true },
    message: { type:String, required:true },
    date: { type: Date, default:Date.now },
    comments: [{ body: String, date: Date }],
    },
    { timestamps: true }
);


const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
