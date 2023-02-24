const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 

    names: {
        type: String
    },

    email: {
        type: String
    },

    username: {
        type: String
    },

    password: {
        type: String
    },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;