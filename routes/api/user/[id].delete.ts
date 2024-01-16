export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  if (!id) return { status: 400, body: "Id is required" };

  const user = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });

  return `${user.email} deleted successfully!`;
});
