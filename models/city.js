const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: String,
    posts: String,
    resources: 
    [

    ]
});

const City = mongoose.model('City', CitySchema);

module.exports = City;
