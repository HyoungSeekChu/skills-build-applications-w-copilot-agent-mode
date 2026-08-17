import { Router } from 'express';

import { User } from '../models/User.ts';

const usersRouter = Router();

usersRouter.get('/', async (_request, response, next) => {
  try {
    const users = await User.find().sort({ name: 1 });
    response.json(users);
  } catch (error) {
    next(error);
  }
});

export default usersRouter;