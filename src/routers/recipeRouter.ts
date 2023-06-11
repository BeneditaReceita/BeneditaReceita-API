import { Router } from 'express';
import { addRecipies } from '@/controllers/recipe_controller';
const recipesRouter = Router();

recipesRouter.post('', addRecipies);

export { recipesRouter };
