import { prisma } from '@/config/database';

async function addRecipe(name: string, Description: string, img: string, userId?: number) {
  if (userId) {
    const query = await prisma.recipe.create({
      data: {
        name,
        Description,
        img,
        userId,
      },
    });
  } else {
    const query = await prisma.recipe.create({
      data: {
        name,
        Description,
        img,
        userId: 1,
      },
    });
  }
}

async function findRecipes() {
  const query = await prisma.recipe.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export default {
  addRecipe,
};
