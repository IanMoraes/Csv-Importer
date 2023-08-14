import api from "../dependencies/api";
import useSweetAlert from "../hooks/useSweetAlert";
import User from "../interfaces/User";

class UserService {
  async getUsers(param?: string): Promise<User[]> {
    let users: User[] = [];

    const Alert = useSweetAlert();
    try {
      const response = await api.get(`/api/users?q=${param}`);
      users = response.data.data;
      return users;
    } catch (error) {
      Alert.errorAlert("Error getting users", "Check your network");
      return users;
    }
  }
}

export default new UserService();
