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
  HowTo: string,
  userId?: number,
) {
  if (
    name == undefined ||
    Description === undefined ||
    img === undefined ||
    HowTo === undefined ||
    ingredients === undefined
  ) {
    throw IncompleteRecipeError();
  }

  if (userId != undefined) {
    const user = await userRepositories.findUser(userId);
    if (!user) throw badRequestError('Invalid UserId Error');
  }

  const Recipe = await recipeRepositories.addRecipe(name, Description, img, HowTo, userId);
  const RecipeId = Recipe.id;
  console.log(Recipe);

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
