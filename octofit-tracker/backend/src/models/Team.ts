import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    focus: { type: String, required: true },
    weeklyGoalMinutes: { type: Number, required: true },
    membersCount: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Team = mongoose.model('Team', teamSchema);