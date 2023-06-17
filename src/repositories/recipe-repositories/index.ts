import { prisma } from '@/config/database';

async function addRecipe(name: string, Description: string, img: string, userId?: number) {
  let query;

  if (userId) {
    query = await prisma.recipe.create({
      data: {
        name,
        Description,
        img,
        userId,
      },
    });
  } else {
    query = await prisma.recipe.create({
      data: {
        name,
        Description,
        img,
        //retirar userId
        userId: 3,
      },
    });
  }

  return query;
}

async function findRecipes() {
  const query = await prisma.recipe.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      Ingredients: true,
    },
  });
  return query;
}

async function addIngredients(RecipeId: number, quantity: number, name: string, measureUnit: string) {
  const query = await prisma.ingredients.create({
    data: {
      RecipeId,
      quantity,
      name,
      measureUnit,
    },
  });

  return query;
}

async function getRecipeById(id: number) {
  const query = await prisma.recipe.findUnique({
    where: { id },
    include: { Ingredients: true },
  });
  return query;
}

export default {
  addRecipe,
  findRecipes,
  addIngredients,
  getRecipeById,
};
