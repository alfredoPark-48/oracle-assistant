const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    productId: String,
    productName: String,
    price: Number,
    quantity: Number,
    brandName: String,
    description: String,
});

mongoose.model("Product", productSchema);
