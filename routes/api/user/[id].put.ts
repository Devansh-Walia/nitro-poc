export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const data = await readBody(event);
  if (!id) return { status: 400, body: "Id is required" };
  console.log(id, data);

  if (!data.name && !data.email) {
    return {
      status: 400,
      body: "Name or email is required to update",
    };
  }

  // check if user already exists
  const userExists = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  if (!userExists) {
    return {
      status: 400,
      body: "User doesn't exist",
    };
  }

  // Update user in database
  const user = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      name: data.name,
      email: data.email,
    },
  });

  return user;
});
