import { prisma } from '@/config/database';

async function findUser(id: number) {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export default {
  findUser,
};
