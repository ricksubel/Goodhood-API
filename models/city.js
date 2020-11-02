const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new mongoose.Schema({
    name:{ type:String },
    state:{ type:String },
    posts: [{type: Schema.Types.ObjectId, ref: "Posts"}],
//     resources: [{
//         physicalHealth: {link: String},
//         mentalHealth: {link: String},
//         financialHealth: {link: String},
//         careerDevelopment: {link: String},
//         education: {link: String},
//         socialIssues: {link: String},
//         political: {link: String},
//         neighborhoodDevelopment: {link: String},
//         crime: {link: String},
//         abuse: {link: String},
//         addiction: {link: String},
//     }]
});

const City = mongoose.model('City', CitySchema);

module.exports = City;
