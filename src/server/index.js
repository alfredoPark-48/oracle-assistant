const express = require('express');
const app = express();

const predictionRoutes = require('./routes/predictionRoutes');

app.use(express.json());
app.use(predictionRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;
