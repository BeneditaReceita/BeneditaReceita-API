import { IncompleteRecipeError } from '@/errors/IncompleteRecipe';
import recipeRepositories from '@/repositories/recipe-repositories';

async function createRecipe(name: string, Description: string, img: string, userId?: number) {
  if (!name || !Description || !img) {
    throw IncompleteRecipeError;
  }

  const Recipe = await recipeRepositories.addRecipe(name, Description, img, userId);

  return Recipe;
}
export default { createRecipe };
