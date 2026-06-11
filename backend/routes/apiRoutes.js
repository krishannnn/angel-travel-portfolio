const express = require('express');

const router = express.Router();

const Metrics = require('../models/metricsModel');

router.get('/metrics', async (req, res) => {

  try {

    const metrics = await Metrics
      .findOne()
      .sort({ createdAt: -1 });

    res.json(metrics);

  } catch (err) {

    console.error(err.message);

    res.status(500).send('Server Error');

  }

});

router.post('/metrics', async (req, res) => {

  try {

    const {
      bookings,
      customers,
      revenue
    } = req.body;

    const metrics = new Metrics({
      bookings,
      customers,
      revenue
    });

    await metrics.save();

    res.json(metrics);

  } catch (err) {

    console.error(err.message);

    res.status(500).send('Server Error');

  }

});

module.exports = router;