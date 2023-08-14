import prismaMock from "../__mocks__/usersmock"; // Importar o mock do Prisma
import getUsersService from "../services/Users/getUsersService";

jest.mock("../dependencies/prisma", () => prismaMock); // Mock do Prisma

describe("getUsersService", () => {
  it("should get users with matching parameters", async () => {
    const param = "Usermock";

    const result = await getUsersService(param);

    expect(result).toHaveLength(2); 
  });

});
