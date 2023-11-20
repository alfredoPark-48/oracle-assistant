const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
    user: String,
    products: String,
    orderDate: { type: Date, default: Date.now },
});

mongoose.model("Order", orderSchema);
