const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
    _id: {
        required: true,
        type: String
    },
    size: {
        required: true,
        type: Number,
    },
    type: {
        required: true,
        type: Number,
    },
    numberOfLives: {
        required: true,
        type: Number,
    },
    solvedTable: [[{
        status: {
            required: true,
            type: Number,
        },
        color: {
            required: true,
            type: String,
        }
    }]],
}, { timestamps: true });

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;