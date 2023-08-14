import prisma from "../../dependencies/prisma";
import User from "../../models/User";

const createUsersService = async (users: User[]) => {
  const createdUsers: User[] = [];

  try {
    for (const user of users) {
      const createdUser = await prisma.user.create({ data: user });
      createdUsers.push(createdUser);
    }
    return createdUsers;
  } catch (error) {
    throw new Error("Failed to create users.");
  }
};

export default createUsersService;
