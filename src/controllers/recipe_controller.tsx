import recipeServices from '@/services/recipe-services';
import { NextFunction, Request, Response } from 'express';

function addRecipies(req: Request, res: Response, Next: NextFunction) {
  try {
    const { userId, name, Description, img }: { userId: number; name: string; Description: string; img: string } =
      req.body;
    recipeServices.createRecipe(name, Description, img, userId);
    return res.sendStatus(200);
  } catch (error) {}
}
export default {};
