export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  if (!id) return { status: 400, body: "Id is required" };

  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!user) {
    return {
      status: 404,
      body: "User not found",
    };
  }

  return user;
});
