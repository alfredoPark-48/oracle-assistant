const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

require('../models/User');
require('../models/Order');
require('../models/Product');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(express.json());

require('../routes/productRoutes')(app);
require('../routes/userRoutes')(app);

app.get("/", (req, res) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
