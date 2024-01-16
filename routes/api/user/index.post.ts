export default defineEventHandler(async (event) => {
  const data = await readBody(event);

  if (!data.name) {
    return {
      status: 400,
      body: "Name is required",
    };
  }
  if (!data.email) {
    return {
      status: 400,
      body: "Email is required",
    };
  }

  // check if user already exists
  const userExists = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (userExists) {
    return {
      status: 400,
      body: "User already exists",
    };
  }

  // Create user in database
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
    },
  });

  return `Hello ${user.name}!`;
});
