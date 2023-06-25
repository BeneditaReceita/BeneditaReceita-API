import { Router } from 'express';
import { addRecipies, getRecipeById, getRecipes } from '../controllers/recipe_controller';
const recipesRouter = Router();

recipesRouter.post('', addRecipies).get('', getRecipes).get('/:id', getRecipeById);

export { recipesRouter };
