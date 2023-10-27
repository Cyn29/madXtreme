import { Router } from "express";
import { postRegistration } from "../controllers/registerController.js";

const registerRoutes = Router();
registerRoutes.post("/", postRegistration);

export default registerRoutes;
