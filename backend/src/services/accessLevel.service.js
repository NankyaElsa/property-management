import { AccessLevel } from "../models/index.js";

class AccessLevelService {
  async createAccessLevel(name, description) {
    try {
      const accessLevel = await AccessLevel.create({ name, description });
      return accessLevel;
    } catch (error) {
      throw new Error("Failed to create access level.");
    }
  }

  async getAllAccessLevels() {
    try {
      const accessLevels = await AccessLevel.findAll();
      return accessLevels;
    } catch (error) {
      throw new Error("Failed to retrieve access levels.");
    }
  }

  // Add more methods as needed
}

const accessLevelService = new AccessLevelService();
export default accessLevelService;
