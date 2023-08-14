// __mocks__/prisma.ts
const prismaMock = {
    user: {
      create: jest.fn((data) => ({ ...data, id: 1, created_at: new Date() })),
    },
  };
  
  export default prismaMock;
  