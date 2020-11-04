const db = require('../models');

const index = (req, res) => {
    db.User.findById(req.userId, (err, foundUser) => {
        db.Post.find({ city:foundUser.city }, (err, foundPosts) => {
        // db.Post.find({ city:foundUser.city }).sort('-date').exec((err, foundPosts) => {
        // filter/sort by tags
            if (err) console.log('Error in posts#index:', err);    
            if(!foundPosts.length) return res.status(200).json({ "message": "No posts found in db" });
            res.status(200).json({ "posts": foundPosts });
        });
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
    console.log(req.body, 'user create post')
    req.body.user = req.userId;
    db.Post.create(req.body, (err, savedPost) => {
        if (err) console.log('Error in posts#create:', err);
        db.User.findById(req.userId, (err, foundUser) => {
            foundUser.posts.push(savedPost);
            foundUser.save();
            res.status(201).json({ "Post": savedPost });
            console.log("Created new post!", savedPost)
        })
    });
};

const update = (req, res) => {
    console.log(req.userId, 'user edit post')
    db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPost) => {
        if (err) console.log('Error in posts#update:', err);
        if(!updatedPost) return res.status(200).json({ "message": "No Post with that id found in db" });
        res.status(200).json({ "Post": updatedPost });
        console.log("Updated post!")
    });
};

const destroy = (req, res) => {
    console.log(req.userId, 'user delete post')
    db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
        if (err) console.log('Error in posts#destroy:', err);
        if(!deletedPost) return res.status(200).json({ "message": "No post with that id found in db" });
        db.User.findById(req.userId, (err, foundUser) => {
            foundUser.posts.remove(deletedPost);
            foundUser.save();
            res.status(200).json({ "Post": deletedPost });
            console.log("Deleted post!")
        });
    });
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
