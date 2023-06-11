import { IncompleteRecipeError } from '@/errors/IncompleteRecipe';
import { badRequestError } from '@/errors/bad-request-error';
import recipeRepositories from '@/repositories/recipe-repositories';
import userRepositories from '@/repositories/user-repositories';

async function createRecipe(name: string, Description: string, img: string, userId?: number) {
  if (name == undefined || Description === undefined || img === undefined) {
    throw IncompleteRecipeError();
  }

  if (userId != undefined) {
    const user = await userRepositories.findUser(userId);
    if (!user) throw badRequestError('InvalidUserIdError');
  }

  const Recipe = await recipeRepositories.addRecipe(name, Description, img, userId);

  return Recipe;
}

async function findRecipes() {
  const recipes = await recipeRepositories.findRecipes();

  return recipes;
}

export default { createRecipe, findRecipes };
