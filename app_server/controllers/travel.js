const mongoose = require('mongoose');
const Travel = mongoose.model('Travel');

const travelList = async (req, res) => {
  try {
    const travels = await Travel.find({});
    res.render('travel-list', {
      title: 'Travlr Getaways',
      pageHeader: {
        title: 'Travlr Getaways',
        strapline: 'Explore your next adventure!'
      },
      travels
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading travel packages');
  }
};

module.exports = {
  travelList
};
