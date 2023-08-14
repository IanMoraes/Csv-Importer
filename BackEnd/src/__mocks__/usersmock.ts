const usersmock = {
    user: {
      findMany: jest.fn(() => [
        {
          name: "Usermock 1",
          city: "City 1",
          country: "Country 1",
          favorite_sport: "Sport 1",
        },
        {
          name: "Usermock 2",
          city: "City 2",
          country: "Country 2",
          favorite_sport: "Sport 2",
        },
      ]),
    },
  };
  
  export default usersmock;
  