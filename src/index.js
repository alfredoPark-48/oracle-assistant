const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const predictionRoutes = require('./routes/predictionRoutes');

app.use(express.json());
app.use(predictionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});