const mongoose = require('mongoose');
const validator = require('validator')

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String],
    // validate: (value) => {
    //     return validator.isPerson(value)
    // }
});

module.exports = mongoose.model('Person', personSchema)