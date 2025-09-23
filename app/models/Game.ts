import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    numberOfLives: {
        type: Number,
        required: true
    },
    solvedTable: [[{
        status: {
            type: Number,
            required: true
        },
        color: {
            type: String,
            required: false
        }
    }]],
    makerName: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.models.Game || mongoose.model('Game', gameSchema);