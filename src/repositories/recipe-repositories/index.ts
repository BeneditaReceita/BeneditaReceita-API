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
        userId: 1,
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
  });
  return query;
}

export default {
  addRecipe,
  findRecipes,
};
