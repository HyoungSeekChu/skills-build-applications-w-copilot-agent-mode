import mongoose from 'mongoose';

import { Activity } from '../models/Activity.ts';
import { Leaderboard } from '../models/Leaderboard.ts';
import { Team } from '../models/Team.ts';
import { User } from '../models/User.ts';
import { Workout } from '../models/Workout.ts';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Team.insertMany([
      {
        name: 'OctoFit Trailblazers',
        city: 'San Francisco',
        focus: 'Endurance and outdoor cardio',
        weeklyGoalMinutes: 900,
        membersCount: 4,
      },
      {
        name: 'Core Commit Crew',
        city: 'Seattle',
        focus: 'Strength training and mobility',
        weeklyGoalMinutes: 720,
        membersCount: 3,
      },
    ]);

    await User.insertMany([
      {
        username: 'mona-fit',
        name: 'Mona Octocat',
        email: 'mona@example.com',
        role: 'team captain',
        age: 31,
        heightCm: 168,
        weightKg: 64,
        teamName: 'OctoFit Trailblazers',
      },
      {
        username: 'hubot-lifts',
        name: 'Hubot Trainer',
        email: 'hubot@example.com',
        role: 'member',
        age: 35,
        heightCm: 178,
        weightKg: 78,
        teamName: 'Core Commit Crew',
      },
      {
        username: 'octavia-runner',
        name: 'Octavia Runner',
        email: 'octavia@example.com',
        role: 'member',
        age: 27,
        heightCm: 172,
        weightKg: 67,
        teamName: 'OctoFit Trailblazers',
      },
    ]);

    await Activity.insertMany([
      {
        userEmail: 'mona@example.com',
        teamName: 'OctoFit Trailblazers',
        type: 'run',
        durationMinutes: 42,
        distanceKm: 7.1,
        caloriesBurned: 480,
        activityDate: new Date('2026-08-10T13:30:00.000Z'),
      },
      {
        userEmail: 'hubot@example.com',
        teamName: 'Core Commit Crew',
        type: 'strength training',
        durationMinutes: 55,
        distanceKm: 0,
        caloriesBurned: 410,
        activityDate: new Date('2026-08-11T22:00:00.000Z'),
      },
      {
        userEmail: 'octavia@example.com',
        teamName: 'OctoFit Trailblazers',
        type: 'cycling',
        durationMinutes: 68,
        distanceKm: 24.6,
        caloriesBurned: 620,
        activityDate: new Date('2026-08-12T12:15:00.000Z'),
      },
    ]);

    await Leaderboard.insertMany([
      {
        rank: 1,
        username: 'octavia-runner',
        teamName: 'OctoFit Trailblazers',
        points: 1840,
        weeklyMinutes: 312,
      },
      {
        rank: 2,
        username: 'mona-fit',
        teamName: 'OctoFit Trailblazers',
        points: 1715,
        weeklyMinutes: 286,
      },
      {
        rank: 3,
        username: 'hubot-lifts',
        teamName: 'Core Commit Crew',
        points: 1430,
        weeklyMinutes: 241,
      },
    ]);

    await Workout.insertMany([
      {
        title: 'Endurance Builder',
        category: 'cardio',
        level: 'intermediate',
        durationMinutes: 45,
        exercises: ['tempo run', 'hill repeats', 'cooldown jog'],
        recommendedFor: ['OctoFit Trailblazers', 'distance runners'],
      },
      {
        title: 'Core Stability Circuit',
        category: 'strength',
        level: 'beginner',
        durationMinutes: 30,
        exercises: ['plank holds', 'dead bugs', 'single-leg bridges'],
        recommendedFor: ['Core Commit Crew', 'mobility focus'],
      },
      {
        title: 'Recovery Ride',
        category: 'cycling',
        level: 'all levels',
        durationMinutes: 35,
        exercises: ['easy spin', 'cadence drills', 'stretch cooldown'],
        recommendedFor: ['active recovery', 'cycling days'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
