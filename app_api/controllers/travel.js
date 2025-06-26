const Trip = require('../models/trip');

module.exports.list = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to load trips' });
  }
};

module.exports.detail = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    res.json(trip);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch trip' });
  }
};

module.exports.create = async (req, res) => {
  try {
    const newTrip = new Trip(req.body);
    await newTrip.save();
    res.status(201).json({ message: 'Trip created', trip: newTrip });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create trip' });
  }
};

module.exports.update = async (req, res) => {
  try {
    const updated = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Trip not found for update' });
    res.json({ message: 'Trip updated', trip: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update trip' });
  }
};

module.exports.delete = async (req, res) => {
  try {
    const deleted = await Trip.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Trip not found for deletion' });
    res.json({ message: 'Trip deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete trip' });
  }
};
