const fs = require('fs');

module.exports.travelList = function(req, res) {
  const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
  res.render('travel', {
    title: 'Travlr Getaways',
    trips: trips
  });
};
