import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true },
    teamName: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    distanceKm: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    activityDate: { type: Date, required: true },
  },
  { timestamps: true },
);

export const Activity = mongoose.model('Activity', activitySchema);