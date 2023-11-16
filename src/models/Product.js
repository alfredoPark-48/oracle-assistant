const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    productName: String,
    price: Number,
    quantity: Number,
    brandName: String
})

mongoose.model('Product', productSchema);
