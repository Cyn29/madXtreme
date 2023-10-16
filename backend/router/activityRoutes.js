import { Router } from "express";
import {
  getActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity,
} from "../controllers/activityController.js";

const ActivityRoutes = Router();

ActivityRoutes.get("/", getActivities);
ActivityRoutes.get("/:id", getActivityById);
ActivityRoutes.post("/", createActivity);
ActivityRoutes.patch("/:id", updateActivity);
ActivityRoutes.delete("/:id", deleteActivity);

export default ActivityRoutes;
