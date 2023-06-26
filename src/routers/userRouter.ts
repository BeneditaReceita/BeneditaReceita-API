import { Router } from 'express';

import { createUserSchema } from '../schemas/UserSchemas';
import { validateBody } from '../middlewares/validationMiddleware';
import { usersPost } from '../controllers/UserController';

const usersRouter = Router();

usersRouter.post('', validateBody(createUserSchema), usersPost);

export { usersRouter };
