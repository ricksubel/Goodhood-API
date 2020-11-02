const db = require('./models');
const data = require('./cityData.json');

db.City.deleteMany({}, (err, deletedCities) => {
    db.City.create(data.Cities, (err, seededCities) => {
        if (err) console.log(err);
        
        console.log('Cities created successfully');
            
        process.exit();
    });
});
