const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    displayName: String,
    creditResult: Boolean
})

mongoose.model('User', userSchema);
