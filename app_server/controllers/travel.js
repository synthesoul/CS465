module.exports.travelList = function(req, res) {
    res.render('travel', {
        title: 'Travel',
        heading: 'Explore Our Destinations'
    });
};
