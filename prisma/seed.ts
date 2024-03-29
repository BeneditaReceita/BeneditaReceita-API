import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  let user = await prisma.user.findFirst();
  if (!user) {
    user = await prisma.user.create({
      data: {
        name: 'anon',
        image: 'https://upload.wikimedia.org/wikipedia/pt/0/04/Wojak.jpg',
        email: 'test@gmail.com',
        password: '123456',
      },
    });
  }

  console.log({ user });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
