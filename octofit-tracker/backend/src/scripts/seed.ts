import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/octofit';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

// Modified by AI on 07/30/2026. Edit #1.
const users = [
  {
    username: 'maya_runner',
    email: 'maya.runner@example.com',
    displayName: 'Maya Chen',
    age: 29,
    fitnessGoal: 'Train for a half marathon',
    teamName: 'Velocity Vibe',
    joinedAt: new Date('2026-05-14T12:00:00Z'),
  },
  {
    username: 'leo_lifts',
    email: 'leo.lifts@example.com',
    displayName: 'Leo Martinez',
    age: 34,
    fitnessGoal: 'Build functional strength',
    teamName: 'Core Crushers',
    joinedAt: new Date('2026-04-22T12:00:00Z'),
  },
  {
    username: 'amina_flow',
    email: 'amina.flow@example.com',
    displayName: 'Amina Patel',
    age: 27,
    fitnessGoal: 'Improve mobility and consistency',
    teamName: 'Flex Force',
    joinedAt: new Date('2026-06-02T12:00:00Z'),
  },
];

// Modified by AI on 07/30/2026. Edit #1.
const teams = [
  {
    name: 'Velocity Vibe',
    mascot: 'Bolt',
    city: 'Seattle',
    coach: 'Jordan Lee',
    memberCount: 12,
  },
  {
    name: 'Core Crushers',
    mascot: 'Atlas',
    city: 'Austin',
    coach: 'Priya Shah',
    memberCount: 10,
  },
  {
    name: 'Flex Force',
    mascot: 'Tempo',
    city: 'Chicago',
    coach: 'Morgan Reed',
    memberCount: 9,
  },
];

// Modified by AI on 07/30/2026. Edit #1.
const activities = [
  {
    username: 'maya_runner',
    activityType: 'Outdoor Run',
    durationMinutes: 48,
    caloriesBurned: 430,
    distanceMiles: 5.2,
    completedAt: new Date('2026-07-27T13:30:00Z'),
  },
  {
    username: 'leo_lifts',
    activityType: 'Strength Circuit',
    durationMinutes: 55,
    caloriesBurned: 390,
    distanceMiles: 0,
    completedAt: new Date('2026-07-28T22:15:00Z'),
  },
  {
    username: 'amina_flow',
    activityType: 'Yoga Flow',
    durationMinutes: 40,
    caloriesBurned: 180,
    distanceMiles: 0,
    completedAt: new Date('2026-07-29T11:00:00Z'),
  },
  {
    username: 'maya_runner',
    activityType: 'Hill Intervals',
    durationMinutes: 35,
    caloriesBurned: 360,
    distanceMiles: 3.4,
    completedAt: new Date('2026-07-30T12:45:00Z'),
  },
];

// Modified by AI on 07/30/2026. Edit #1.
const leaderboard = [
  {
    username: 'maya_runner',
    teamName: 'Velocity Vibe',
    points: 1880,
    rank: 1,
    weeklyMinutes: 210,
  },
  {
    username: 'leo_lifts',
    teamName: 'Core Crushers',
    points: 1645,
    rank: 2,
    weeklyMinutes: 185,
  },
  {
    username: 'amina_flow',
    teamName: 'Flex Force',
    points: 1510,
    rank: 3,
    weeklyMinutes: 170,
  },
];

// Modified by AI on 07/30/2026. Edit #1.
const workouts = [
  {
    title: 'Tempo Run Builder',
    focusArea: 'Cardio endurance',
    difficulty: 'Intermediate',
    durationMinutes: 45,
    suggestedForGoal: 'Train for a half marathon',
    exercises: ['10-minute warmup jog', '20-minute tempo run', '6 stride repeats', 'Cooldown walk'],
  },
  {
    title: 'Total Body Strength Ladder',
    focusArea: 'Functional strength',
    difficulty: 'Advanced',
    durationMinutes: 50,
    suggestedForGoal: 'Build functional strength',
    exercises: ['Goblet squats', 'Push presses', 'Renegade rows', 'Farmer carries'],
  },
  {
    title: 'Mobility Reset Flow',
    focusArea: 'Mobility',
    difficulty: 'Beginner',
    durationMinutes: 30,
    suggestedForGoal: 'Improve mobility and consistency',
    exercises: ['Cat-cow sequence', 'World greatest stretch', 'Low lunge twists', 'Box breathing'],
  },
];

/**
 * Seed the octofit_db database with test data
 */
// Modified by AI on 07/30/2026. Edit #1.
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Promise.all([
      User.insertMany(users),
      Team.insertMany(teams),
      Activity.insertMany(activities),
      LeaderboardEntry.insertMany(leaderboard),
      Workout.insertMany(workouts),
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
