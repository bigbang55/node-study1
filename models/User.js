// file name has first letter captalized because it returns a class, not a function (JS standards)
const mongoose = require('mongoose');
const { Schema } = mongoose; // ES6 destructuring - same as [const Schema = mongoose.Schema]

const userSchema = new Schema({
    googleId: String,
    facebookId: String
});

mongoose.model('User', userSchema); //first letter capitalized and singular (mongoose standard)
