const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

const tripsList = (req, res) => {
  Trip.find({}, (err, trips) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(trips);
    }
  });
};

module.exports = { tripsList };
