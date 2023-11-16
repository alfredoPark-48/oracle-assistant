const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    displayName: String
})

mongoose.model('User', userSchema);
