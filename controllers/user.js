const db = require("../models");

const show = async (req, res) => {
    try {
    // Find the user by the id set in the request 
        console.log(req.userId);
        const foundUser = await db.User.findById(req.userId);
        // respond with the user data
        res.status(200).json({ status: 200, data: foundUser });
    } catch (err) {
        return res.status(500).json({
        status: 500,
        message: "Something went wrong. Please try again",
        });
    }
};

const update = (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
        if (err) console.log('Error in user#update:', err);
        if(!updatedUser) return res.status(200).json({ "message": "No user with that id found in db" });
        res.status(200).json({ "Post": updatedUser });
    });
};

const destroy = async (req,res) => {
    try {
        const owner = await db.User.findById(req.params.id);
        if (req.session.foundUser == owner._id) {
            console.log("current user owns this account")
            const deletedUser = await db.User.findByIdAndDelete(req.params.id);

            // remove any associations to an authentication model
            const deletedUserAuth = await db.User_auth.findOne({user: deletedUser._id});
            console.log("deletedUserAuth:",deletedUserAuth);
            deletedUserAuth.user = null;
            await deletedUserAuth.save();

            // delete session data
            await req.session.destroy();
            res.redirect(`/stories`);
        } else {
            res.redirect(`/users/${owner._id}`);
        }
    } 
    catch (err) {
        console.log(err)
        res.send('internal server error');
    }
};


module.exports = {
    show,
    update,
    destroy,
};
