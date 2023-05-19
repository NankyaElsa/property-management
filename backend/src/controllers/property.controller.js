import { propertyService } from "../services/index.js";
import { propertySchema } from "../utils/validations.js";

class PropertyController {
  async createProperty(req, res) {
    try {
      const {
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
      } = req.body;

      // Validate request data
      const { error } = propertySchema.validate({
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
      });
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      const property = await propertyService.createProperty(
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
        approved
      );
      return res.status(201).json(property);
    } catch (error) {
      return res.status(500).json({ error: "Failed to create property." });
    }
  }

  async getPropertyById(req, res) {
    try {
      const { propertyId } = req.params;
      const property = await propertyService.getPropertyById(propertyId);
      if (!property) {
        return res.status(404).json({ error: "Property not found." });
      }
      return res.json(property);
    } catch (error) {
      return res.status(500).json({ error: "Failed to retrieve property." });
    }
  }

  async getAllProperties(req, res) {
    try {
      const properties = await propertyService.getAllProperties();
      return res.json(properties);
    } catch (error) {
      return res.status(500).json({ error: "Failed to retrieve properties." + error });
    }
  }

  async updateProperty(req, res) {
    try {
      const { propertyId } = req.params;
      const {
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
      } = req.body;

      // Validate request data
      const { error } = propertySchema.validate({
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
      });
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      const property = await propertyService.updateProperty(
        propertyId,
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
        approved
      );
      if (!property) {
        return res.status(404).json({ error: "Property not found." });
      }
      return res.json(property);
    } catch (error) {
      return res.status(500).json({ error: "Failed to update property." });
    }
  }

  async deleteProperty(req, res) {
    try {
      const { propertyId } = req.params;
      const property = await propertyService.deleteProperty(propertyId);
      if (!property) {
        return res.status(404).json({ error: "Property not found." });
      }
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete property." });
    }
  }
}

const propertyController = new PropertyController();
export default propertyController;
