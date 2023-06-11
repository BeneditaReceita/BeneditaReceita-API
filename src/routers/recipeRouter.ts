import { Router } from 'express';
import { addRecipies, getRecipes } from '@/controllers/recipe_controller';
const recipesRouter = Router();

recipesRouter.post('', addRecipies).get('', getRecipes);

export { recipesRouter };
