import { Router } from 'express';

import activitiesRouter from './activities.ts';
import leaderboardRouter from './leaderboard.ts';
import teamsRouter from './teams.ts';
import usersRouter from './users.ts';
import workoutsRouter from './workouts.ts';

const apiRouter = Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/teams', teamsRouter);
apiRouter.use('/activities', activitiesRouter);
apiRouter.use('/leaderboard', leaderboardRouter);
apiRouter.use('/workouts', workoutsRouter);

export default apiRouter;