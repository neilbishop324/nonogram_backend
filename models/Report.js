const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    _id: {
        required: true,
        type: String
    },
    reportedPuzzleId: {
        required: true,
        type: String
    }
}, { timestamps: true });

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;