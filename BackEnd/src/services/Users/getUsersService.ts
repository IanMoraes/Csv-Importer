import prisma from "../../dependencies/prisma";

const getUsersService = async (param: string) => {
  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          name: {
            contains: param,
          },
        },
        {
          city: {
            contains: param, 
          },
        },
        {
          country: {
            contains: param, 
          },
        },
        {
          favorite_sport: {
            contains: param, 
          },
        },
      ],
    },
  });

  return users;
};

export default getUsersService;
