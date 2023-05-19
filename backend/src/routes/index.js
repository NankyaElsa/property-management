import { Router } from "express";
import propertyRoutes from "./property.route.js";

const router = Router();

router.use("/properties", propertyRoutes);

export default router;
