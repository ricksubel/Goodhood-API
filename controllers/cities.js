const db = require('../models');
const unirest = require("unirest");

const index = (req, res) => {
    db.City.find({}, (err, foundCities) => {
        if (err) console.log('Error in cities#index:', err);    
        if(!foundCities.length) return res.status(200).json({ "message": "No cities found in db" });
        res.status(200).json({ "cities": foundCities });
    });
};

const show = (req, res) => {
    db.City.findById(req.params.name, (err, foundCity) => {
        if (err) console.log('Error in cities#show:', err);
        if(!foundCity) return res.status(200).json({ "message": "No city with that name found in db" });
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


// OUTSIDE API INFO
const refApi = (req, res) => {
    const request = unirest("GET", "https://referential.p.rapidapi.com/v1/city");
    request.query({
        "fields": "iso_a2%2Cstate_code%2Cstate_hasc%2Cvalue",
        "iso_a2": "us",
        "lang": "en"
    });

    // TODO separate requests for pinpoint requests

    request.headers({
        "x-rapidapi-host": "referential.p.rapidapi.com",
        "x-rapidapi-key": "12204c1023msh311d9a65c5d539dp14f508jsn1182071adc77",
        "useQueryString": true
    });

    request.end(function (res) {
        if (response.error) throw new Error(response.error);
        console.log(response.body);
        res.json({ "data": response.body});
    });
};


// EXPORTS 
module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    refApi,
};
