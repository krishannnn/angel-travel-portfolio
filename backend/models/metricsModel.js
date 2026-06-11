const mongoose = require('mongoose');

const metricsSchema = new mongoose.Schema({

  bookings: Number,

  customers: Number,

  revenue: Number

}, {
  timestamps: true
});

module.exports = mongoose.model('Metrics', metricsSchema);