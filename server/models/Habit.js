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
    health: {
        type: Number,
        default: 80
      },
      wealth: {
        type: Number,
        default: 50
      },
      selfLove: {
        type: Number,
        default: 0
      }
    // completed: {
    //     type: Boolean,
    //     required: true
    // }
}, {timestamps: true})

module.exports = mongoose.model('Habit', habitSchema)