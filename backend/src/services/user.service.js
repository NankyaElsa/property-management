import { User } from "../models/index.js";

class UserService {
  async createUser(
    accessLevelId,
    username,
    password,
    email,
    firstName,
    lastName,
    phone,
    address,
    city,
    state,
    zip,
    created,
    modified
  ) {
    try {
      const user = await User.create({
        accessLevelId,
        username,
        password,
        email,
        firstName,
        lastName,
        phone,
        address,
        city,
        state,
        zip,
        created,
        modified,
      });
      return user;
    } catch (error) {
      throw new Error("Failed to create user." + error);
    }
  }

  async getUserById(userId) {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      throw new Error("Failed to retrieve user.");
    }
  }

  // Add more methods as needed
}

const userService = new UserService();
export default userService;
