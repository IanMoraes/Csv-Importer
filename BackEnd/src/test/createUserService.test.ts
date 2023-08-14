import prismaMock from "../__mocks__/prisma"; // Importar o mock do Prisma
import createUsersService from "../services/Users/createUsersService";
import User from "../models/User";


describe("createUsersService", () => {
    it("should create users successfully", async () => {
      const mockUsers: User[] = [
        {
          name: "User 1",
          city: "City 1",
          country: "Country 1",
          favorite_sport: "Sport 1",
        },
        {
          name: "User 2",
          city: "City 2",
          country: "Country 2",
          favorite_sport: "Sport 2",
        },
      ];
  
      const createdUsers = await createUsersService(mockUsers);
  
      expect(createdUsers).toHaveLength(2);
      expect(createdUsers[0].name).toBe("User 1");
      expect(createdUsers[0]).toHaveProperty("id")
      expect(createdUsers[1].city).toBe("City 2");
    });
  
  });