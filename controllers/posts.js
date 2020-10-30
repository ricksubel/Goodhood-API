const db = require('../models');

const index = (req, res) => {
    db.Post.find({}, (err, foundPosts) => {
        if (err) console.log('Error in posts#index:', err);    
        if(!foundPosts.length) return res.status(200).json({ "message": "No posts found in db" });
        res.status(200).json({ "posts": foundPosts });
    });
};

const show = (req, res) => {
    db.Post.findById(req.params.id, (err, foundPost) => {
        if (err) console.log('Error in posts#show:', err);
        if(!foundPost) return res.status(200).json({ "message": "No Post with that id found in db" });
        res.status(200).json({ "Post": foundPost });
    });
};

const create = (req, res) => {
    db.Post.create(req.body, (err, savedPost) => {
        if (err) console.log('Error in posts#create:', err);
        res.status(201).json({ "Post": savedPost });
    });
};

const update = (req, res) => {
    db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPost) => {
        if (err) console.log('Error in posts#update:', err);
        if(!updatedPost) return res.status(200).json({ "message": "No Post with that id found in db" });
        res.status(200).json({ "Post": updatedPost });
    });
};

const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err) console.log('Error in posts#destroy:', err);
        if(!deletedPost) return res.status(200).json({ "message": "No post with that id found in db" });
        res.status(200).json({ "Post": deletedPost });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
