import { IncompleteRecipeError } from '@/errors/IncompleteRecipe';
import { badRequestError } from '@/errors/bad-request-error';
import { notFoundError } from '@/errors/notFoundError';
import recipeRepositories from '@/repositories/recipe-repositories';
import userRepositories from '@/repositories/user-repositories';
import { Ingredients } from '@prisma/client';

async function createRecipe(
  name: string,
  Description: string,
  img: string,
  ingredients: Omit<Ingredients, 'id, RecipeId'>[],
  userId?: number,
) {
  if (name == undefined || Description === undefined || img === undefined) {
    throw IncompleteRecipeError();
  }

  if (userId != undefined) {
    const user = await userRepositories.findUser(userId);
    if (!user) throw badRequestError('InvalidUserIdError');
  }

  const Recipe = await recipeRepositories.addRecipe(name, Description, img, userId);
  const RecipeId = Recipe.id;

  ingredients.map(async (i) => {
    await recipeRepositories.addIngredients(RecipeId, i.quantity, i.name, i.measureUnit);
  });

  return Recipe;
}

async function findRecipes() {
  const recipes = await recipeRepositories.findRecipes();

  return recipes;
}

async function findRecipeById(id: number) {
  const recipe = await recipeRepositories.getRecipeById(id);

  if (!recipe) {
    throw notFoundError('Recipe');
  }
  return recipe;
}

export default { createRecipe, findRecipes, findRecipeById };
