const express = require('express');
const router = express.Router();
const predictionController = require('../controllers/predictionController');

// Define route for /predict-model
router.post('/predict-model', predictionController.predictModel);

module.exports = router;

