import { Router } from 'express';

import { Leaderboard } from '../models/Leaderboard.ts';

const leaderboardRouter = Router();

leaderboardRouter.get('/', async (_request, response, next) => {
  try {
    const leaderboard = await Leaderboard.find().sort({ rank: 1 });
    response.json(leaderboard);
  } catch (error) {
    next(error);
  }
});

export default leaderboardRouter;