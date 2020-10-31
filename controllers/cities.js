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

const getGeodbCities = (req, res) => {
    const request = unirest("GET", "https://wft-geo-db.p.rapidapi.com/v1/geo/cities");
    request.query({
        "limit": "10",
        "countryIds": "US",
    });
    
    // TODO separate requests for pinpoint requests

    request.headers({
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
        "x-rapidapi-key": "aede35bf35mshc901c441b5b1ebap145231jsnbe0cd14a71d4",
        "useQueryString": true
    });


    request.end(function (response) {
        if (response.error) throw new Error(response.error);
        console.log(response.body);
        res.json({ "data": response.body});
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    getGeodbCities,
};
