import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
    reportedPuzzleId: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Report = mongoose.models.Report || mongoose.model('Report', reportSchema);