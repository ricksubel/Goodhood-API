const db = require('../models');

const index = (req, res) => {
    db.City.find({}, (err, foundCities) => {
        if (err) console.log('Error in cities#index:', err);    
        if(!foundCities.length) return res.status(200).json({ "message": "No cities found in db" });
        res.status(200).json({ "cities": foundCities });
    });
};

const show = (req, res) => {
    db.City.findById(req.params.id, (err, foundCity) => {
        if (err) console.log('Error in cities#show:', err);
        if(!foundCity) return res.status(200).json({ "message": "No city with that id found in db" });
        res.status(200).json({ "City": foundCity });
    });
};

const create = (req, res) => {
    db.City.create(req.body, (err, savedCity) => {
        if (err) console.log('Error in cities#create:', err);
        res.status(201).json({ "City": savedCity });
    });
};

const update = (req, res) => {
    db.City.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedCity) => {
        if (err) console.log('Error in cities#update:', err);
        if(!updatedCity) return res.status(200).json({ "message": "No city with that id found in db" });
        res.status(200).json({ "City": updatedCity });
    });
};

const destroy = (req, res) => {
    db.City.findByIdAndDelete(req.params.id, (err, deletedCity) => {
        if (err) console.log('Error in cities#destroy:', err);
        if(!deletedCity) return res.status(200).json({ "message": "No city with that id found in db" });
        res.status(200).json({ "City": deletedCity });
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
