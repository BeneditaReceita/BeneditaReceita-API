type recipe = {
  userId?: number;
  name: string;
  Description: string;
  img: string;
};
function createRecipe(userId: number, name: string, Description: string, img: string) {
  try {
    const { userId, name, Description, img }: { userId: number; name: string; Description: string; img: string } = prop;
  } catch (error) {}
}
export default { createRecipe };
