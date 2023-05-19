import { Property } from "../models/index.js";

class PropertyService {
  async createProperty(
    name,
    description,
    price,
    availableRooms,
    numberOfBathrooms,
    address,
    image,
    type,
    created,
    modified,
    ownerId,
    city,
    approved
  ) {
    try {
      const property = await Property.create({
        name,
        description,
        price,
        availableRooms,
        numberOfBathrooms,
        address,
        image,
        type,
        created,
        modified,
        ownerId,
        city,
        approved,
      });
      return property;
    } catch (error) {
      throw new Error("Failed to create property.");
    }
  }

  async getPropertyById(propertyId) {
    try {
      const property = await Property.findByPk(propertyId);
      return property;
    } catch (error) {
      throw new Error("Failed to retrieve property.");
    }
  }

  async getAllProperties() {
    return await Property.findAll();
  }

  async updateProperty(
    name,
    description,
    price,
    availableRooms,
    numberOfBathrooms,
    address,
    image,
    type,
    ownerId,
    city,
    approved,
    propertyId
  ) {
    try {
      const property = await Property.update(
        {
          name,
          description,
          price,
          availableRooms,
          numberOfBathrooms,
          address,
          image,
          type,
          ownerId,
          city,
          approved,
        },
        {
          where: {
            id: propertyId,
          },
        }
      );
      return property;
    } catch (error) {
      throw new Error("Failed to update property.");
    }
  }

  async deleteProperty(propertyId) {
    try {
      const property = await Property.destroy({
        where: {
          id: propertyId,
        },
      });
      return property;
    } catch (error) {
      throw new Error("Failed to delete property.");
    }
  }
}

const propertyService = new PropertyService();
export default propertyService;
