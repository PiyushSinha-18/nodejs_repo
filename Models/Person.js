const mongoose = require('mongoose');

const person_Schema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    salary: {
        type: Number,
        required: true
    }
})

const person_Model = mongoose.model("piyush_Collection", person_Schema);

module.exports = person_Model;