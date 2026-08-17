import { Router } from 'express';

import { Workout } from '../models/Workout.ts';

const workoutsRouter = Router();

workoutsRouter.get('/', async (_request, response, next) => {
  try {
    const workouts = await Workout.find().sort({ title: 1 });
    response.json(workouts);
  } catch (error) {
    next(error);
  }
});

export default workoutsRouter;