import mongoose from 'mongoose';

const leaderboardSchema = new mongoose.Schema(
  {
    rank: { type: Number, required: true, unique: true },
    username: { type: String, required: true },
    teamName: { type: String, required: true },
    points: { type: Number, required: true },
    weeklyMinutes: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);