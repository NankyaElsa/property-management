import { Router } from "express";
import { propertyController } from "../controllers/index.js";

const router = Router();

router
  .get("/", propertyController.getAllProperties)
  .post("/", propertyController.createProperty)
  .get("/:propertyId", propertyController.getPropertyById)
  .put("/:propertyId", propertyController.updateProperty)
  .delete("/:propertyId", propertyController.deleteProperty);


export default router;
