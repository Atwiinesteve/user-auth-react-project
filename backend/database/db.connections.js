const mongoose = require('mongoose');
require('dotenv/config')

module.exports = mongoose.connect(process.env.DATABASE, { useNewUrlParser: true} , err => {
    if(err) {
        console.log(err.message)
    } else {
        console.log('database connection successful')
    }
});