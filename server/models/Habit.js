//allows us to create a schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const habitSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String, 
        unique: false,
        enum: [
            "Health",
            "Wealth",
            "Self-love"
        ]
    },
    // completed: {
    //     type: Boolean,
    //     required: true
    // }
}, {timestamps: true})

module.exports = mongoose.model('Habit', habitSchema)