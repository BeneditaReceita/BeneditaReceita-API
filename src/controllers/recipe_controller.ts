import recipeServices from '@/services/recipe-services';
import { Ingredients } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

export async function addRecipies(req: Request, res: Response, Next: NextFunction) {
  try {
    const {
      userId,
      name,
      Description,
      img,
      Ingredients,
    }: {
      userId: number;
      name: string;
      Description: string;
      img: string;
      Ingredients: Omit<Ingredients, 'id, RecipeId'>[];
    } = req.body;

    const createRecipe = await recipeServices.createRecipe(name, Description, img, Ingredients, userId);

    return res.status(httpStatus.CREATED).send(createRecipe);
  } catch (error) {
    Next(error);
  }
}

export async function getRecipes(req: Request, res: Response, Next: NextFunction) {
  try {
    const recipes = await recipeServices.findRecipes();

    return res.status(httpStatus.OK).send(recipes);
  } catch (error) {
    Next(error);
  }
}
