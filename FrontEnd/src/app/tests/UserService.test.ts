import UserService from '../services/UserSevice'

import api from '../dependencies/api';
jest.mock('../dependencies/api', () => ({
  get: jest.fn(() => Promise.resolve({ data: { data: [] } })),
}));

describe('UserService', () => {
  describe('getUsers', () => {
    it('should fetch users successfully', async () => {
      const mockApiResponse = {
        data: {
          data: [
            {
              id: 1,
              name: 'Alice',
              city: 'Example City',
              country: 'Example Country',
              favorite_sport: 'Tennis',
              created_at: '2023-08-14T00:00:00Z',
            },
          ],
        },
      };
      
      // @ts-ignore
      api.get.mockResolvedValue(mockApiResponse);

      const users = await UserService.getUsers();

      expect(users).toEqual([
        {
          id: 1,
          name: 'Alice',
          city: 'Example City',
          country: 'Example Country',
          favorite_sport: 'Tennis',
          created_at: '2023-08-14T00:00:00Z',
        },
      ]);
    });

    it('should handle API error gracefully', async () => {
      // @ts-ignore
      api.get.mockRejectedValue(new Error('API error'));

      const users = await UserService.getUsers();

      expect(users).toEqual([]);
    });
  });
});
